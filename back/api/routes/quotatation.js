const express = require('express');
const router = express.Router();
const quotationController = require('../controllers/quotation');
const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, quotationController.createQuotation);
router.get('/', checkAuth, quotationController.getQuotationsAll);
router.get('/:id', checkAuth, quotationController.getQuotation);
router.put('/:id', checkAuth, quotationController.updateQuotation);

module.exports = router;
