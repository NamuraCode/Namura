const express = require("express");
const app = express();
// routes
const index_routes = require("./routers/index.routes");

// Route for / empty
app.use('/', index_routes);


// export app 
module.exports = app;