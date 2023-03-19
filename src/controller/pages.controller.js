const pagesController = {
    pages: (req, res)=>{
        try{
            let pages = {
                total: 8
            }
            res.render("pages", {pages})
        }catch(error){
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

module.exports = pagesController