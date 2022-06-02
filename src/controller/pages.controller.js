const pagesController = {
    pages: (req, res)=>{
        try{
            res.render("pages")
        }catch(error){
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

module.exports = pagesController