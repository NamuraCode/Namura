function hiddenShowModelsHome( itemsToShow, itemsToHidden, firtsClass, secondClass ){
    try{
        // validate that the variable is array
        let showValidation = Array.isArray(itemsToShow)
        let hiddenValidation = Array.isArray(itemsToHidden)
        // if is true and more that 2
        if( showValidation && hiddenValidation && itemsToShow.length >= 2 && itemsToHidden.length >= 2){
            // items to show
            itemsToShow.forEach((element, index) => {
                if (index <= 0) {
                    element.classList.add(firtsClass)
                }else{
                    element.classList.add(secondClass)
                }
            });
            // items to hidden
            itemsToHidden.forEach((element, index) => {
                if (index <= 0) {
                    element.classList.remove(firtsClass)
                }else{
                    element.classList.remove(secondClass)
                }
            });
        }
    }catch(error){
        console.error(`error: ${error}`)
    }
}

module.exports = { hiddenShowModelsHome }