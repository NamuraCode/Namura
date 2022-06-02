const modelsController = {
    models: (req, res) =>{
        try{
            res.render("models")
        }catch(error){
            console.log(`Error in the page:" ${error} "`)
        }
    }
}

module.exports = modelsController