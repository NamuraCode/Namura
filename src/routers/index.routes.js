const express = require('express');
const router = express.Router();
const home = require("./home.routes")

router.use('/', home)

module.exports = home