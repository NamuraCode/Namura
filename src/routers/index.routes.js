const express = require('express');
const router = express.Router();
const home = require("./home.routes")
const desing = require("./digital.routes")
const models = require("./models.routes")
const pages = require("./pages.routes")
const about = require("./about.routes")
const contact = require("./contact.routes")

router.use('/', home)

router.use('/', desing)

router.use('/', models)

router.use('/', pages)

router.use('/', about)

router.use('/', contact)

module.exports = router