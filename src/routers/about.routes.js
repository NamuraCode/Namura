const express = require('express');
const router = express.Router();
const { aboutController } = require('../controller')

router.get('/about', aboutController.about);

module.exports = router