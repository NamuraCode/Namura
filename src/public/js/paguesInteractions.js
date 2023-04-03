window.addEventListener("load", ()=>{
    let locationPage = window.location.pathname
    try{
        if(locationPage === "/pages"){
            const pageItems = document.querySelectorAll(".info-content-pages")
            const decrementArrow = document.querySelector(".change-left")
            const increaseArrow = document.querySelector(".change-right")
            function changeCartIndex(operation){
                operation != "decrement" ? showCart += 1 : showCart -= 1 
                if (showCart > pageItems.length) {
                    showCart = 1
                }else{
                    if (showCart < 1) {
                        showCart = pageItems.length
                    }
                }
                return showCart
            }
            decrementArrow.addEventListener("click", ()=>{
                console.log(changeCartIndex('decrement'))
            })
            increaseArrow.addEventListener("click", ()=>{
                console.log(changeCartIndex('increment'))
            })
        }
    }catch(error){
        console.log(error);
    }
})