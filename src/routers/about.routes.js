import express from 'express';
const router = express.Router();
import contoller from '../controller/index.js'

router.get('/about', contoller.aboutController.about);

export default router