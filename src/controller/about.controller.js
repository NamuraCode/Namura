const aboutController ={
    about : (req, res) => {
        try{
            res.render("about")
        }catch(error){
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

export default aboutController