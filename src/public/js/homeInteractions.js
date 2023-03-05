window.addEventListener("load", ()=>{
    let locationPage = window.location.pathname
    if(locationPage === "/"){
        let titleCode = document.querySelector(".titles-code")
        let iconCode = document.querySelector(".icons-code")
        let titleDesing = document.querySelector(".titles-desing")
        let iconDesing = document.querySelector(".icons-desing")
        titleCode.addEventListener("click", ()=>{
            iconCode.classList.add("show-icons")
            titleCode.classList.add("selected")
            iconDesing.classList.remove("show-icons")
            titleDesing.classList.remove("selected")
        })
        titleDesing.addEventListener("click", ()=>{
            iconDesing.classList.add("show-icons")
            titleDesing.classList.add("selected")
            iconCode.classList.remove("show-icons")
            titleCode.classList.remove("selected")
        })
    }   
})

