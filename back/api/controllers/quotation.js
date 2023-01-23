const mongoose = require('mongoose');
const Quotation = require('../models/quotation');

exports.createQuotation = (req, res) => {
  const quotation = new Quotation({
    _id: new mongoose.Types.ObjectId(),
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
    productList: req.body.productList,
    etc: req.body.etc,
    creater: req.body.createrId,
    // creater: req.userData.userId,
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
