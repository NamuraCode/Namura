import express from 'express';
const router = express.Router();
import contoller from '../controller/index.js'

router.get("/pages", contoller.pagesController.pages)

export default router