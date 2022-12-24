const express = require("express");
const app = express();
const path =  require("path");
const bodyParser = require('body-parser')
const morgan = require('morgan');
// routes
const index_routes = require("./routers/index.routes");
// Path absoilute
const publicPath = path.resolve(__dirname,'./public');
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
module.exports = app;