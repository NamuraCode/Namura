// const path = require("path")
const desingController = {
    digital: (req, res)=>{
        try {
            // SendFile html whit simple path.join without ejs and res.render 
            // res.sendFile(path.join(__dirname, '../views/home.html'))
            // This is the formule for render ejs template
            res.render("digital")
        } catch (error) {
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

export default desingController