import app from "./app.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// Absolute path views for partials
app.set('views', join(__dirname, './views'))
// Template ejs install
app.set('view engine', 'ejs')

app.listen(3000,()=>{ 
    console.log("runnig in port 3000")
})
