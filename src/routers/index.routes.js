import express from 'express';
const router = express.Router();
import home from "./home.routes.js"
import desing from "./digital.routes.js"
import models from "./models.routes.js"
import pages from "./pages.routes.js"
import about from "./about.routes.js"
import contact from "./contact.routes.js"

router.use('/', home)

router.use('/', desing)

router.use('/', models)

router.use('/', pages)

router.use('/', about)

router.use('/', contact)

export default router