const mongoose = require('mongoose');
const moment = require('moment');
const NOW = moment().format('YYYY-MM-DD HH:mm:ss');
const TODAY = moment().format('YYYY-MM-DD');

// _id, user, client, productList, etc(비고), createdAt, creater
const quotationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createdAt: { type: String, default: NOW },
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  quoteNumber: { type: String },
  quoteDate: { type: String, default: TODAY },
  user: {
    userName: { type: String },
    companyName: { type: String },
    companyRegiNum: { type: String },
    telephoneNum: { type: String },
    companyAddress: { type: String },
    businessType: { type: String },
    businessItem: { type: String },
    email: { type: String },
  },
  client: {
    companyName: { type: String },
    clientName: { type: String },
    companyRegiNum: { type: String },
    telephoneNum: { type: String },
    companyAddress: { type: String },
    email: { type: String },
  },
  productList: { type: Array },
  etc: { type: String },
});

module.exports = mongoose.model('Quotation', quotationSchema);
