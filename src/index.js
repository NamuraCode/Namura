import * as dotenv from 'dotenv'
import app from "./app.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
// Config dotenv
dotenv.config()
// Path absoilute
const __dirname = dirname(fileURLToPath(import.meta.url));
// Absolute path views for partials
app.set('views', join(__dirname, './views'))
// Template ejs install
app.set('view engine', 'ejs')
// Runing server with port 3000 or port 3001
app.listen( process.env.PORT || 3001,()=>{ 
    console.log("runnig in port 3000")
})
