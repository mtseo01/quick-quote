const mongoose = require('mongoose');
const User = require('../models/user');
const Client = require('../models/client');
const router = require('../routes/client');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

exports.createClient = (req, res) => {
	User.findById(req.userData.userId).then(user => {
		if (!user) {
			return res.status(403).json({
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

				creater: req.userData.userId, // 필수
			});
			client
				.save()
				.then(result => {
					return res.status(201).json({
						success: true,
						message: '클라이언트 생성을 성공하였습니다.',
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

exports.getClientAll = (req, res) => {
	const createrId = req.userData.userId;
	User.findById({ _id: createrId })
		.exec()
		.then(creater => {
			if (!creater) {
				return res.status(404).json({
					success: false,
					message: '요청 실패, 거래처 정보를 찾을 수 없습니다.',
				});
			} else {
				Client.find({ creater: createrId })
					.exec()
					.then(docs => {
						if (docs.length <= 0) {
							return res.status(404).json({
								success: false,
								message: '거래처 정보가 없습니다.',
							});
						} else {
							res.status(200).json({
								success: true,
								message: `${docs.length}개의 거래처 정보를 조회하였습니다.`,
								count: docs.length,
								docs,
							});
						}
					})
					.catch(err => {
						res.status(500).json({
							success: false,
							message: '에러 발생',
							error: err,
						});
					});
			}
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

exports.getClient = (req, res) => {
	let clientId = req.params.clientId;
	let userId = req.userData.userId;
	console.log('userId ', userId);
	Client.findById({ _id: clientId })
		.populate('creater', '_id')
		.exec()
		.then(doc => {
			if (doc.creater.id !== userId) {
				return res.status(401).json({
					success: false,
					message: '접근 권한이 없습니다.',
				});
			} else {
				return res.status(200).json({
					success: true,
					message: `거래처 ${doc.companyName}의 정보를 조회하였습니다.`,
					doc,
				});
			}
		})
		.catch(err => {
			return res.status(500).json({
				success: false,
				message: '조회를 실패하였습니다.',
				error: err,
			});
		});
};

exports.updateClient = (req, res) => {
	let clientId = req.params.clientId;
	Client.findByIdAndUpdate(clientId, { $set: req.body }, { new: true })
		.then(result => {
			return res.status(200).json({
				success: true,
				message: '거래처 정보가 수정 되었습니다.',
				result,
			});
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};
