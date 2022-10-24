const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// routes
const index_routes = require("./routers/index.routes");
// For recibe date in req.body 
app.use(bodyParser.urlencoded({extended: true}));
// Json intercambios
app.use(bodyParser.json())
// Route for / empty
app.use('/', index_routes);
// export app 
module.exports = app;