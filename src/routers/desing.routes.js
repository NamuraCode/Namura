const express = require('express');
const router = express.Router();
const { desingController } = require('../controller')

router.get('/digital', desingController.digital);

module.exports = router