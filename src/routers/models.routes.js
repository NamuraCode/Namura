const express = require('express');
const router = express.Router();
const { modelsController } = require('../controller')

router.get("/models", modelsController.models)

module.exports = router