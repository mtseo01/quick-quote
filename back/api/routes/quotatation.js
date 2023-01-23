const express = require('express');
const router = express.Router();
const quotationController = require('../controllers/quotation');
const checkAuth = require('../middleware/check-auth');

router.post('/', quotationController.createQuotation);

module.exports = router;
