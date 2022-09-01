let header = document.getElementById("header")
let background = document.getElementById("main-background")
let bgflag = true;
window.addEventListener("scroll",()=>{
    if(window.scrollY === 0){
        header.classList.remove("not-top");
    }else{
        header.classList.add("not-top");
    }
})

function changebg(){
    setTimeout(()=>{
        if(bgflag){
            background.src = "background-image2.jpg"
        }else{
            background.src = "background-image.jpg"
        }
        bgflag = !bgflag;
        changebg();
    }, 8000)
}
changebg();

