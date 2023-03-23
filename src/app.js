import express from "express";
const app = express();
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from 'body-parser'
import morgan from 'morgan';
// routes
import index_routes from "./routers/index.routes.js";
// Path absoilute
const publicPath = resolve(__dirname,'./public');
// Estatic route for date in proyect
app.use(express.static(publicPath));
// For recibe date in req.body 
app.use(bodyParser.urlencoded({extended: true}));
// Json intercambios
app.use(bodyParser.json())
// res and req show html request
app.use(morgan('combined'))
// Route for / empty
app.use('/', index_routes);
// export app 
export default app;