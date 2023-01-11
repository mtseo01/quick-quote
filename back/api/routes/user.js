const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// router.post('/account', userController.getUserInfo);

router.post('/signup', userController.signup);
// router.post('/login', userController.login);

// router.put('/account/edit/:userId');

module.exports = router;
