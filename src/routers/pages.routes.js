const express = require('express');
const router = express.Router();
const { pagesController } = require('../controller')

router.get("/pages", pagesController.pages)

module.exports = router