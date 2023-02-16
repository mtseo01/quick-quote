const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/product');

exports.createProduct = (req, res) => {
  let createrId = req.userData.userId;
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    productName: req.body.productName,
    unitPrice: req.body.unitPrice,
    inventory: req.body.inventory,
    creater: createrId,
  });
  product
    .save()
    .then(result => {
      return res.status(201).json({
        success: true,
        message: '제품을 등록하였습니다.',
        result,
      });
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        message: '제품 등록을 실패하였습니다.',
        error: err,
      });
    });
};
