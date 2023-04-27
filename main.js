let SignIn  = document.querySelector("#SignIn")
let SignUp  = document.querySelector("#SignUp")
let login = document.querySelector(".login")
let Sign = document.querySelector(".SignUp")

SignUp.onclick = function(){
    login.style.transform = "translateX(400px)"
    Sign.style.transform = "translateX(-400px)"
}
SignIn.onclick = function(){
    Sign.style.transform = "translateX(0)"
    login.style.transform = "translateX(0)"
}

let navbar = document.querySelector("#navbar")
let Close = document.querySelector("#close")
let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")

navbar.onclick = function(){
    div1.style.display = "flex"
    navbar.style.display = "none"
    Close.style.display = "block"
    div2.style.display = "none"
}
Close.onclick = function(){
    div1.style.display = "none"
    navbar.style.display = "block"
    Close.style.display = "none"
    div2.style.display = "block"
}