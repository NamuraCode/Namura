window.addEventListener("load", ()=>{
    let locationPage = window.location.pathname
    try{
        if(locationPage === "/pages"){
            const pageItems = document.querySelectorAll(".info-content-pages")
            const decrementArrow = document.querySelector(".change-left")
            const increaseArrow = document.querySelector(".change-right")
            let showCart = Math.trunc(pageItems.length / 2)
            const minPositionCarts =  -120
            const cartPositions = [
                `translate(${minPositionCarts / 1}%, 0px) scale(0.4)`,
                `translate(${minPositionCarts / 1.7}%, 0px) scale(0.6)`,
                `translate(${minPositionCarts - minPositionCarts}%, 0px) scale(1)`,
                `translate(${(minPositionCarts / 1.7) * -1}%, 0px) scale(0.6)`,
                `translate(${(minPositionCarts / 1) * -1}%, 0px) scale(0.4)`
            ]

            for (let index = 0; index < pageItems.length; index++) {
                pageItems[index].style.transform = cartPositions[index]
            }

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