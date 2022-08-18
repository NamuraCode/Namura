// const path = require("path")
const db2 = require('../models/punto') 
const homeController = {
    home: async (req, res)=>{
        try {
            let db3 = await db2.getAll()
            // SendFile html whit simple path.join without ejs and res.render 
            // res.sendFile(path.join(__dirname, '../views/home.html'))
            // This is the formule for render ejs template
            res.render("home", {db:db3})
            console.log(db3)
        } catch (error) {
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

module.exports = homeController
