const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const checkAuth = require('../middleware/check-auth');

// 제품 등록 API
router.post('/', checkAuth, productController.createProduct);

// 제품 전체 조회 API
router.get('/', checkAuth, productController.getProductAll);

// 특정 제품 조회 API
router.get('/:id', checkAuth, productController.getProduct);

// 제품 정보 수정 API
router.put('/:id', checkAuth, productController.updateProduct);

module.exports = router;
