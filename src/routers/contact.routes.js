import express from 'express';
const router = express.Router();
import contoller from '../controller/index.js'

router.get('/contact', contoller.contactController.contact);
router.post('/contact/message', contoller.contactController.message);

export default router