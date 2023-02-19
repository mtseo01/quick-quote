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

exports.getProductAll = (req, res) => {
  const createrId = req.userData.userId;
  Product.find({ creater: createrId })
    .exec()
    .then(docs => {
      if (docs.length <= 0) {
        return res.status(404).json({
          success: false,
          message: '제품 데이터가 없습니다.',
        });
      } else {
        return res.status(200).json({
          success: true,
          message: '제품 데이터를 조회하였습니다.',
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

exports.getProduct = (req, res) => {
  const productId = req.params.id;
  let createrId = req.userData.userId;
  Product.findById({ _id: productId })
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
          message: '제품 데이터를 조회하였습니다.',
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

exports.updateProduct = (req, res) => {
  let productId = req.params.id;
  Product.findByIdAndUpdate(productId, { $set: req.body }, { new: true })
    .then(result => {
      return res.status(200).json({
        success: true,
        message: '제품 정보가 수정 되었습니다.',
        result,
      });
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};
