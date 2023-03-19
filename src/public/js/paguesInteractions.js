window.addEventListener("load", ()=>{
    let locationPage = window.location.pathname
    try{
        if(locationPage === "/pages"){
            const pagesItems = document.querySelectorAll(".info-content-pages")
            const decrementArrow = document.querySelector(".change-left")
            const increaseArrow = document.querySelector(".change-right")
            const totalItems = pagesItems.length
            const halfScreen =  window.innerWidth / 2
            const splitScreen = halfScreen/totalItems
            let cartPositionDevice = halfScreen
            // console.log(cartPositionDevice);
            // console.log(Math.trunc((totalItems / 2)));
            pagesItems.forEach((cart, index) => {
                cartPositionDevice -= splitScreen
                console.log(1 / (index / 10));
                // console.log(cartPositionDevice)
                const indexCurrent = index + 1
                indexCurrent == Math.trunc((totalItems / 2)) ? cart.setAttribute("active", true) : ""
            });
            
        }
    }catch(error){
        console.log(error);
    }
})