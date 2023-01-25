const mongoose = require('mongoose');
const Quotation = require('../models/quotation');
const User = require('../models/user');

exports.createQuotation = (req, res) => {
  let createrId = req.userData.userId;
  const quotation = new Quotation({
    _id: new mongoose.Types.ObjectId(),
    quoteTitle: req.body.quoteTitle,
    quoteNumber: req.body.quoteNumber,
    quoteDate: req.body.quoteDate,
    user: {
      userName: req.body.user.userName,
      companyName: req.body.user.companyName,
      companyRegiNum: req.body.user.companyRegiNum,
      telephoneNum: req.body.user.telephoneNum,
      companyAddress: req.body.user.companyAddress,
      businessType: req.body.user.businessType,
      businessItem: req.body.user.businessItem,
      email: req.body.user.email,
    },
    client: {
      companyName: req.body.client.companyName,
      clientName: req.body.client.clientName,
      companyRegiNum: req.body.client.companyRegiNum,
      telephoneNum: req.body.client.telephoneNum,
      companyAddress: req.body.client.companyAddress,
      email: req.body.client.email,
    },
    products: req.body.products,
    amount: req.body.amount,
    note: req.body.note,
    // creater: req.body.createrId,
    creater: createrId,
  });
  quotation
    .save()
    .then(result => {
      return res.status(201).json({
        success: true,
        message: '견적서를 생성하였습니다.',
        result,
      });
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        message: '견적서 생성을 실패하였습니다.',
        error: err,
      });
    });
};

exports.getQuotationsAll = (req, res) => {
  const createrId = req.userData.userId;
  // const createrId = req.body.createId;
  Quotation.find({ creater: createrId })
    .exec()
    .then(docs => {
      if (docs.length <= 0) {
        return res.status(404).json({
          success: false,
          message: '작성한 견적서가 없습니다.',
        });
      } else {
        return res.status(200).json({
          success: true,
          count: docs.length,
          docs,
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

exports.getQuotation = (req, res) => {
  const quotationId = req.params.id;
  let createrId = req.userData.userId;
  Quotation.findById({ _id: quotationId })
    .populate('creater', '_id')
    .exec()
    .then(doc => {
      if (doc.creater.id !== createrId) {
        return res.status(401).json({
          success: false,
          message: '권한이 없습니다.',
        });
      } else {
        return res.status(200).json({
          success: true,
          doc,
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

exports.updateQuotation = (req, res) => {
  let quotationId = req.params.id;
  Quotation.findByIdAndUpdate(quotationId, { $set: req.body }, { new: true })
    .then(result => {
      return res.status(200).json({
        success: true,
        message: '견적서 정보가 수정 되었습니다.',
        result,
      });
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

exports.deleteQuotation = (req, res) => {
  let quotationId = req.params.id;
  Quotation.deleteOne({ _id: quotationId })
    .exec()
    .then(result => {
      return res.status(200).json({
        success: true,
        message: '견적서를 삭제하였습니다.',
        id: result._id,
      });
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        messgae: '삭제를 실패하였습니다.',
        error: err,
      });
    });
};
