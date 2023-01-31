const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

// 회원가입 API
router.post('/signup', userController.signup);

// 로그인 API
router.post('/login', userController.login);

// 특정 유저 정보 가져오기 API
router.get('/information', checkAuth, userController.getUserInfo);

// 특정 유저 정보 수정 API
router.put('/:userId', checkAuth, userController.updateUser);

// 유저 비밀번호 변경 API
router.put('/password/:userId', checkAuth, userController.updatePassword);

// 회원 탈퇴 API
router.post('/:userId', checkAuth, userController.deleteUser);

module.exports = router;
