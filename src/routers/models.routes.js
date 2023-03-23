import express from 'express';
const router = express.Router();
import contoller from '../controller/index.js'

router.get("/models", contoller.modelsController.models)

export default router