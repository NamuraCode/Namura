window.addEventListener("load", ()=>{
    let locationPage = window.location.pathname
    if(locationPage === "/"){
        //Links reference hover
        const homeMe = document.querySelector(".nav-name")
        const github = document.querySelector(".social-github")
        const arstation = document.querySelector(".social-artstation")
        const instagram = document.querySelector(".social-instagram")
        const email = document.querySelector(".social-email")
        const whatsapp = document.querySelector(".social-whatsapp")
        const device = document.querySelector(".hove-vertical-ball")
        const linksArray = [homeMe,github,arstation,instagram,email,whatsapp]

        let titleCode = document.querySelector(".titles-code")
        let iconCode = document.querySelector(".icons-code")
        let titleDesing = document.querySelector(".titles-desing")
        let iconDesing = document.querySelector(".icons-desing")
        // is necesary that array start whit the title
        let codeModel = [titleCode, iconCode]
        let desingModel = [titleDesing, iconDesing]

        titleCode.addEventListener("click", ()=>{
            hiddenShowModelsHome(codeModel, desingModel, "selected", "show-icons")
        })
        titleDesing.addEventListener("click", ()=>{
            hiddenShowModelsHome(desingModel, codeModel, "selected", "show-icons")
        })

        stopTrakingLinks(linksArray, device)

        function stopTrakingLinks(linksArray, device){
            for (let i = 0; i < linksArray.length; i++) {
                linksArray[i].addEventListener("mouseover", ()=>{
                    console.log("| --entro")
                    console.log(device.style.width = "42%");
                })
                linksArray[i].addEventListener("mouseout", ()=>{
                    console.log("- --salio")
                    console.log(device.style.width = "26%");
                })
            }
        }
    }   
    linksTrakerMouse()
})


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

function linksTrakerMouse(){
    let device = document.querySelector(".hove-vertical-ball")
    window.addEventListener("mousemove", (e)=>{
        device.style.top = `${e.pageY - 12}px`
    })
}
