// import path from "path"
const homeController = {
    home: async (req, res)=>{
        try {
            // let db3 = await db2.getAll()
            // SendFile html whit simple path.join without ejs and res.render 
            // res.sendFile(path.join(__dirname, '../views/home.html'))
            // This is the formule for render ejs template
            res.render("home")
        } catch (error) {
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

export default homeController