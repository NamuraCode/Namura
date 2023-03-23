import express from 'express'
const router = express.Router();
import contoller from '../controller/index.js'

router.get('/', contoller.homeController.home);

export default router