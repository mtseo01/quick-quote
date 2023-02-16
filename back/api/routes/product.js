const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, productController.createProduct);

module.exports = router;
