const express = require("express");
const app = express();
// routes
const index_routes = require("./routers/index.routes");
const routeDesing = require("./routers/index.routes")

// Route for / empty
app.use('/', index_routes);

app.use('/', routeDesing);


// export app 
module.exports = app;