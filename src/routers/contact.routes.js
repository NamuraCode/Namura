const express = require('express');
const router = express.Router();
const { contactController } = require('../controller')

router.get('/contact', contactController.contact);
router.post('/contact/message', contactController.message);

module.exports = router