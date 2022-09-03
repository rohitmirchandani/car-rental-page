let header = document.getElementById("header")
let background = document.getElementById("main-background")
let bgflag = true;
let form = document.getElementById("contact-form");
let buttonSubmit = document.getElementById("button-submit")
let buttonLoading = document.getElementById("button-loading")
let buttonError = document.getElementById("button-error")
let buttonDone = document.getElementById("button-done")

let buttonStatus = [buttonSubmit, buttonLoading, buttonError, buttonDone];

showButton = (status)=>{
    buttonStatus.forEach((i)=>{
        if(i === status){
            i.style.display = 'inline-block'
        }else{
            i.style.display = 'none'
        }
    })
}

window.addEventListener("scroll",()=>{
    if(window.scrollY === 0){
        header.classList.remove("not-top");
    }else{
        header.classList.add("not-top");
    }
})


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data ;
    let fullName = document.getElementById("full-name").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message").value;
    data = {
        name : fullName, 
        mobile: mobile, 
        message : message
    }
    // console.log(data)

    showButton(buttonLoading)
    fetch('https://car-rental-page.herokuapp.com/api/submit-form',{
                method:'POST', 
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data),
            })
            .then((res)=> {
                if(res.status != 200)throw 'Fetching Error'
                showButton(buttonDone)   
            })
            .catch(error => {
                showButton(buttonError)
                document.getElementById("error-message").style.display = 'block'
            })    
})