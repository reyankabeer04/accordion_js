const  accordionItems =document.querySelectorAll(".accordionItems")

accordionItems.forEach(items=>{
    const title =items.querySelector(".accordionTitle")
    const content =items.querySelector(".accordionContent")

title.addEventListener("click",()=>{
    for(var i=0;i<accordionItems.length;i++){
        if(accordionItems[i]!=items){
            accordionItems[i].classList.remove("active")
        }else{
            // accordionItems[i].classList
            items.classList.toggle("active")
        }
    }
})

})