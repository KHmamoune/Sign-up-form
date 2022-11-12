const pass = document.querySelector("#password")
const passcon = document.querySelector("#password-con")
const error = document.querySelector(".error")
const sub = document.querySelector(".sub")

passcon.addEventListener("input" , () => check())
pass.addEventListener("input" , () => check())

function check(){
    if(pass.value != passcon.value){
        error.textContent = "*password doesn't match"
        sub.setAttribute("disabled", true)
    } else {
        error.textContent = ""
        sub.removeAttribute("disabled")
    }
}