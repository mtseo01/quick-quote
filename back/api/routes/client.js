const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');
const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, clientController.createClient);
router.get('/:createrId', checkAuth, clientController.getClientAll);

module.exports = router;
