const express = require("express")
const app = express()
const index_routes = require("./routers/index.routes")


app.use('/', index_routes);

module.exports = app