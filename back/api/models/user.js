const mongoose = require('mongoose');

// _id, 유저이름, 이메일, 비밀번호, 상호명, 사업자등록번호, 전화번호, 주소, 업태, 종목

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	userName: { type: String, required: true },
	email: {
		type: String,
		required: true,
		unique: true,
		match:
			/^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/,
	},
	password: { type: String, required: true },
	companyName: { type: String, required: true },
	companyRegiNum: { type: Number, required: true },
	telephoneNum: { type: Number, required: true },
	companyAddress: { type: String, required: true },
	businessType: { type: String },
	businessItem: { type: String },
});

module.exports = mongoose.model('User', userSchema);
