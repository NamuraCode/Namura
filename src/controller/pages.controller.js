const pagesController = {
    pages: (req, res)=>{
        try{
            let pages = {
                total: 8
            
            }
            res.render("pages")
        }catch(error){
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

export default pagesController