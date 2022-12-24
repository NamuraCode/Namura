const app = require("./app");
const path =  require("path");
// Absolute path views for partials
app.set('views', path.join(__dirname,'./views'))
// Template ejs install
app.set('view engine', 'ejs');
app.listen(3000,()=>{ 
    console.log("runnig in port 3000")
})
