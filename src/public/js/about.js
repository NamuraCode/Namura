window.addEventListener("load", ()=>{
    let locationPage = window.location.pathname
    if(locationPage === "/about"){
        let mainFooter = document.querySelector(".main-footer")
        document.body.classList.add('about-home')
        mainFooter.classList.add('about-footer')
    }
})