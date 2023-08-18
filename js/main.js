//  loader code
let more = document.getElementById("loader")

window.addEventListener("load",function(){
    more.style.display = "none"
})


// upp to 
let uppto = document.getElementById("demo_1")
window.addEventListener("scroll", () => {
    if(pageYOffset > 500){
        uppto.style.display = "block"
    }
    else{
        uppto.style.display = "none"
    }

    uppto.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
})