import express from 'express';
const router = express.Router();
import contoller from '../controller/index.js'

router.get('/digital', contoller.desingController.digital);

export default router