// 회원가입, 로그인, 탈퇴, 회원정보 가져오기 API

const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
