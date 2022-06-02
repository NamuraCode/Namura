const express = require('express');
const router = express.Router();
const home = require("./home.routes")
const desing = require("./desing.routes")

router.use('/', home)

router.use('/desing', desing)

module.exports = router