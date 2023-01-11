const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/signup', userController.signup);
router.get('/:userId', userController.getUserInfo);

module.exports = router;
