const express = require("express")
const app = express()

app.get('/', (req, res)=>{
    res.send('ahi no eso si jamas')
})

module.exports = app