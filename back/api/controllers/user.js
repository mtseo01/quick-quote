// 회원가입, 로그인, 탈퇴, 회원정보 가져오기 API

const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieOption = {
  httpOnly: true, // 스크립트에서 접근 불가로 설정
  sameSite: 'lax',
  secure: false, // https
  domain: 'localhost',
};

exports.signup = (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: '이메일이 이미 존재 합니다.',
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({ error: err });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              userName: req.body.userName,
              email: req.body.email,
              password: hash,
              companyName: req.body.companyName,
              companyRegiNum: req.body.companyRegiNum,
              telephoneNum: req.body.telephoneNum,
              companyAddress: req.body.companyAddress,
              businessType: req.body.businessType,
              businessItem: req.body.businessItem,
            });
            user
              .save()
              .then(result => {
                res.status(201).json({ message: '회원가입 되었습니다.' });
              })
              .catch(err => {
                return res.status(500).json({ error: err });
              });
          }
        });
      }
    });
};

exports.login = (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        res.status(401).json({
          success: false,
          message: '이메일을 찾을 수 없습니다.',
        });
      } else {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              error: err,
            });
          } else if (result) {
            const token = jwt.sign(
              {
                userId: user[0]._id,
                email: user[0].email,
              },
              process.env.JWT_KEY,
              {
                expiresIn: '3h',
              },
            );
            return res.status(200).cookie('token', token, cookieOption).json({
              success: true,
              message: '로그인하였습니다.',
            });
          } else {
            return res.status(401).json({
              success: false,
              message: '비밀번호가 틀렸습니다.',
            });
          }
        });
      }
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        error: err,
      });
    });
};

exports.logout = (req, res) => {
  return res
    .cookie('token', 'deleted', {
      ...cookieOption,
      maxAge: -1,
    })
    .json({
      message: '로그아웃 되었습니다.',
    });
};

exports.getUserInfo = (req, res) => {
  const userId = req.userData.userId;
  User.findById({ _id: userId })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(500).json({ message: '유저 정보가 없습니다.' });
      } else {
        return res.status(200).json({
          message: '유저 정보가 조회 되었습니다.',
          user: {
            userId: user._id,
            userName: user.userName,
            email: user.email,
            companyName: user.companyName,
            companyRegiNum: user.companyRegiNum,
            telephoneNum: user.telephoneNum,
            companyAddress: user.companyAddress,
            businessType: user.businessType,
            businessItem: user.businessItem,
          },
        });
      }
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

exports.updateUser = (req, res) => {
  let userId = req.params.userId;
  User.findByIdAndUpdate(userId, { $set: req.body }, { new: true })
    .then(result => {
      return res.status(200).json({
        success: true,
        message: '유저 정보를 업데이트 하였습니다.',
        result,
      });
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        message: '유저 업데이트를 실패하였습니다.',
        error: err,
      });
    });
};

exports.updatePassword = (req, res) => {
  let userId = req.params.userId;
  let password = req.body.password;
  let newPassword = req.body.newPassword;

  User.find({ _id: userId })
    .exec()
    .then(user => {
      if (user.length <= 0) {
        return res.status(401).json({
          success: false,
          message: '존재하지 않는 유저입니다.',
        });
      } else {
        bcrypt.compare(password, user[0].password, (err, result) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else if (result) {
            bcrypt.hash(newPassword, 10, (err, hash) => {
              if (err) {
                return res.status(500).json({ error: err });
              } else {
                User.findByIdAndUpdate(
                  userId,
                  { $set: { password: hash } },
                  { new: true },
                )
                  .then(response => {
                    return res.status(200).json({
                      success: true,
                      message: '비밀번호 변경을 하였습니다.',
                    });
                  })
                  .catch(err => {
                    return res.status(500).json({
                      success: false,
                      message: '실패하였습니다.',
                      error: err,
                    });
                  });
              }
            });
          } else {
            return res.status(401).json({
              success: false,
              message: '비밀번호가 틀렸습니다.',
            });
          }
        });
      }
    })
    .catch(err => {
      return res.status(500).json({
        error: err,
      });
    });
};

exports.deleteUser = (req, res) => {
  let userId = req.params.userId;
  let password = req.body.password;

  User.find({ _id: userId })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          success: false,
          message: '존재하지 않는 유저입니다.',
        });
      } else {
        bcrypt.compare(password, user[0].password, (err, result) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else if (result) {
            User.deleteOne({ _id: userId })
              .exec()
              .then(response => {
                return res.status(200).json({
                  success: true,
                  message: '회원 탈퇴하였습니다.',
                  response,
                });
              })
              .catch(err => {
                return res.status(500).json({
                  success: false,
                  message: '실패하였습니다.',
                  error: err,
                });
              });
          } else {
            return res.status(401).json({
              success: false,
              message: '비밀번호가 틀렸습니다.',
            });
          }
        });
      }
    })
    .catch(err => {
      return res.status(500).json({
        message: '에러',
        error: err,
      });
    });
};
