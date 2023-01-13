const mongoose = require('mongoose');
const User = require('../models/user');
const Client = require('../models/client');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

exports.createClient = (req, res) => {
	User.findById(req.body.creater).then(user => {
		if (!user) {
			return res.status(404).json({
				success: false,
				message: '클라이언트 생성을 실패하였습니다. (Creater id not found)',
			});
		} else {
			const client = new Client({
				_id: new mongoose.Types.ObjectId(),
				companyName: req.body.companyName, // 필수
				clientName: req.body.clientName,
				companyRegiNum: req.body.companyRegiNum,
				telephoneNum: req.body.telephoneNum,
				companyAddress: req.body.companyAddress,
				email: req.body.email,
				creater: req.body.creater,
				// creater: req.userData._id, // 필수
			});
			client
				.save()
				.then(result => {
					return res.status(201).json({
						success: true,
						message: '클라이언트 생성을 성공하였습니다.',
						// test
						result,
					});
				})
				.catch(err => {
					return res
						.status(500)
						.json({ message: '클라이언트 생성을 실패하였습니다.', error: err });
				});
		}
	});
};
