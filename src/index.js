const express = require("express");
const app = require("./app");
const path =  require("path");
const morgan = require('morgan');
// Path absoilute
const publicPath = path.resolve(__dirname,'./public');
// Estatic route for date in proyect
app.use(express.static(publicPath));
// res and req show html request
app.use(morgan('combined'))
// Absolute path views for partials
app.set('views', path.join(__dirname,'./views'))
// Template ejs install
app.set('view engine', 'ejs');
// Json intercambios
app.use(express.json())
// For recibe date in req.body 
app.use(express.urlencoded({extended: true}));
app.listen(3000)