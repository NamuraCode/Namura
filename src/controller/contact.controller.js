import User from '../models/user.js'
import fs from "fs"
//const db = JSON.parse(fs.readFileSync('../json/users.json'));
import path from "path"
const contactController = {
    contact: (req, res)=>{
        try {
            // SendFile html whit simple path.join without ejs and res.render 
            // res.sendFile(path.join(__dirname, '../views/home.html'))
            // This is the formule for render ejs template
            res.render("contact")
        } catch (error) {
            console.log(`Error in the page:" ${error} "`)
        }
    },
    message: (req, res)=>{
        try {
            let user = new User(
                req.body.name,
                req.body.lastname,
                req.body.message
            )
            db.push(user)
            let users = JSON.stringify(db, null, 4) 
            fs.writeFileSync(path.resolve(__dirname,'../json/users.json'), users)
            console.log(user)
            res.redirect("/contact")
        } catch (error) {
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

export default contactController