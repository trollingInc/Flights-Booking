let formState = "sign in";
const signInBtn = document.getElementById("signin");
const signUpBtn = document.getElementById("signup");
let signIn = document.getElementById("form");
let signUp = document.getElementById("sign-up-form");
const resetPass = document.getElementById("reset-pass");
const borders = document.getElementById("input-borders");
const background = document.getElementById("background-img");
 
function switchBtwnLogins(moveTime, moveDistance, btnToRmv, btnToAdd, color, resDelay, resOpacity, borderTime, borderWidth){ // borderWidth is actually height idk what i've done
    signIn.style.transition = moveTime;
    signIn.style.transform = moveDistance;
    signUp.style.transition = moveTime;
    signUp.style.transform = moveDistance;
    
    btnToRmv.removeAttribute("style");
    btnToAdd.style.backgroundColor = color;
    if(resOpacity == "1")
    {
        resetPass.style.pointerEvents = "auto";
        resetPass.style.userSelect = "auto";
    }
    else
    {
        resetPass.style.pointerEvents = "none";
        resetPass.style.userSelect = "none"
    }
    resetPass.style.transition = "0.2s";
    resetPass.style.transitionDelay = resDelay;
    resetPass.style.opacity = resOpacity;
    borders.style.transition = borderTime;
    borders.style.height = borderWidth;
}

function focusForm(backgroundTime, backgroundBlur, formBackgroundTime, formBackgroundColor){
    background.style.transition = backgroundTime;
    background.style.filter = backgroundBlur;
    borders.style.transition = formBackgroundTime;
    borders.style.backgroundColor = formBackgroundColor;
}

signInBtn.addEventListener("click", (event) => {switchBtwnLogins("0.5s ease-in-out", "translateX(0px)", signUpBtn, signInBtn, "rgb(255, 193, 203)", "0.3s", "1", "0.4s linear", "230px")})
signUpBtn.addEventListener("click", (event) => {switchBtwnLogins("0.5s ease-in-out", "translateX(-484px)", signInBtn, signUpBtn, "rgb(255, 193, 203)", "0s", "0", "0.4s linear", "540px")})

let inputs = document.querySelectorAll("input");

inputs.forEach(element => {
    element.addEventListener("focusin", (event) => focusForm("0.3s linear", "blur(5px)", "background-color 0.5s linear", "rgba(255, 248, 240, 1)"));
})

inputs.forEach(element => {
    element.addEventListener("focusout", (event) => focusForm("0.3s linear", "blur(0px)", "background-color 0.5s linear", "rgba(255, 248, 240, 0"));
})