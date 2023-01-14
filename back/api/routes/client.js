const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');

router.post('/', clientController.createClient);
router.get('/:createrId', clientController.getClientAll);

module.exports = router;
