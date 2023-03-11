const { hiddenShowModelsHome } = require("./indexInteractions")

window.addEventListener("load", ()=>{
    let locationPage = window.location.pathname
    if(locationPage === "/"){
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
    }   
})

