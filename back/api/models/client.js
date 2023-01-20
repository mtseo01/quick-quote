const mongoose = require('mongoose');

/**
 * 거래처(클라이언트) 스키마
 * _id, 상호, 담당자, 사업자등록번호, 전화번호, 주소, 이메일, 생성자(User)
 */

const clientSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  companyName: { type: String, required: true },
  clientName: { type: String },
  companyRegiNum: { type: String },
  telephoneNum: { type: String },
  companyAddress: { type: String },
  email: {
    type: String,
    match:
      /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/,
  },
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Client', clientSchema);
