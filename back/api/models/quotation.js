const mongoose = require('mongoose');
const moment = require('moment');

// _id, user, client, productList, etc(비고), createdAt, creater
const quotationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createdAt: {
    type: String,
    default: () => moment().format('YYYY-MM-DD HH:mm:ss'),
    immutable: true,
  }, // 최초 날짜에서 변경 불가
  updatedAt: {
    type: String,
    default: () => moment().format('YYYY-MM-DD HH:mm:ss'),
  },
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quoteTitle: { type: String }, // 추가
  quoteNumber: { type: String },
  quoteDate: { type: String },
  user: {
    userName: { type: String },
    companyName: { type: String },
    companyRegiNum: { type: String },
    telephoneNum: { type: String },
    companyAddress: { type: String },
    businessType: { type: String },
    businessItem: { type: String },
    email: { type: String, lowercase: true }, // 소문자
  },
  client: {
    companyName: { type: String },
    clientName: { type: String },
    companyRegiNum: { type: String },
    telephoneNum: { type: String },
    companyAddress: { type: String },
    email: { type: String },
  },
  products: { type: Array },
  amount: { type: String },
  note: { type: String },
});

module.exports = mongoose.model('Quotation', quotationSchema);
