const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');
const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, clientController.createClient);
router.get('/', checkAuth, clientController.getClientAll);
router.get('/:clientId', checkAuth, clientController.getClient);
router.put('/:clientId', checkAuth, clientController.updateClient);

module.exports = router;
