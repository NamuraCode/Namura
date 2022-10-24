const express = require("express");
const app = require("./app");
const path =  require("path");
// Path absoilute
const publicPath = path.resolve(__dirname,'./public');
const morgan = require('morgan');

app.listen(3000,()=>{ 
    console.log("runnig in port 3000")
})
// Estatic route for date in proyect
app.use(express.static(publicPath));
// res and req show html request
app.use(morgan('combined'))
// Absolute path views for partials
app.set('views', path.join(__dirname,'./views'))
// Template ejs install
app.set('view engine', 'ejs');
