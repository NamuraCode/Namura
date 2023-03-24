import app from "./app.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from 'dotenv'
dotenv.config()
const __dirname = dirname(fileURLToPath(import.meta.url));
// Absolute path views for partials
app.set('views', join(__dirname, './views'))
// Template ejs install
app.set('view engine', 'ejs')
app.listen( process.env.PORT || 3001,()=>{ 
    console.log("runnig in port 3000")
})
