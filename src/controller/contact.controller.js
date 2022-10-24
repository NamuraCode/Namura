const User = require('../models/user')

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
                req.body.name
            )
            console.log(user)
            res.redirect("/contact")
        } catch (error) {
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

module.exports = contactController