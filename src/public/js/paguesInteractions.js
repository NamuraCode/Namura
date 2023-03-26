window.addEventListener("load", ()=>{
    let locationPage = window.location.pathname
    try{
        if(locationPage === "/pages"){
            const pagesItems = document.querySelectorAll(".info-content-pages")
            const decrementArrow = document.querySelector(".change-left")
            const increaseArrow = document.querySelector(".change-right")
            let showCart = Math.trunc(pagesItems.length / 2)
            const widthCart = pagesItems[showCart].clientWidth
            console.log(widthCart);

            function changeCartIndex(operation){
                operation != "decrement" ? showCart += 1 : showCart -= 1 
                if (showCart > pagesItems.length) {
                    showCart = 1
                }else{
                    if (showCart < 1) {
                        showCart = pagesItems.length
                    }
                }
                return showCart
            }

            function changeCart(array){
                let totalArray = array.length
                if (totalArray > 0) {
                    array.forEach((element, index)=> {
                        index > totalArray / 2 ? console.log(element) : console.log(element)
                    });
                }
            }
            decrementArrow.addEventListener("click", ()=>{
                changeCart(pagesItems)
                console.log(changeCartIndex('decrement'))
            })
            increaseArrow.addEventListener("click", ()=>{
                changeCart(pagesItems)
                console.log(changeCartIndex('increment'))
            })


          
        }
    }catch(error){
        console.log(error);
    }
})