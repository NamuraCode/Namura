const express = require("express")
const path = require('path');
const publicPath = path.resolve(__dirname,'../public');
const app = express()
const index_routes = require("./routers/index.routes")

app.use(express.static(publicPath));

app.use('/', index_routes);

module.exports = app