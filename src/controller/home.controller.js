const path = require("path")
const homeController = {
    home: (req, res)=>{
        try {
            // SendFile html whit simple path.join without ejs and res.render 
            // res.sendFile(path.join(__dirname, '../views/home.html'))
            // This is the formule for render ejs template
            res.render("home")
        } catch (error) {
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

module.exports = {
    homeController
}