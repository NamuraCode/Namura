import express from 'express'
// router for home
const router = express.Router();
// import controller objet
import controller from '../controller/index.js'
// get home page
router.get('/', controller.homeController.home);
// export router
export default router