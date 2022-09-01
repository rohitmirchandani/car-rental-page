let header = document.getElementById("header")
window.addEventListener("scroll",()=>{
    if(window.scrollY === 0){
        header.classList.remove("not-top");
    }else{
        header.classList.add("not-top");
    }
})