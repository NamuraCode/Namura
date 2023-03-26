const pagesController = {
    pages: (req, res)=>{
        try{
            let pages = {
                total: 5
            }
            res.render("pages", {pages})
        }catch(error){
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

export default pagesController