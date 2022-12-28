const formItem = document.querySelectorAll("form > div")
const userPw = document.querySelectorAll("userPw")
const userPwCheck = document.querySelectorAll("#userPwCheck")
const pwTrue = document.querySelector("#pwTrue")
const pwFalse = document.querySelector("#pwFalse")
const items = document.querySelector("#items")
const password = document.getElementById("userPw")
const passwordCheck = document.getElementById("userPwCheck");
const form = document.querySelector("#form")
const userId = document.querySelector("#userId")
const userName = document.querySelector("#userName")

for(let i = 0; i<10; i++){
    formItem[0].classList ="itemAdd"
    formItem[i+1].classList ="itemNone"

    const inputHandler = (e) =>{
        const target = e.target
        if(target.value !== "" || target.value !== undefined ){
            formItem[i+1].classList="itemAdd"
            formItem[i-1].classList="itemAdd2"
        }else{
            formItem[i+1].classList ="itemNone"
        }
    }
    const clickHandler =(e) =>{
        items.scrollTop = items.scrollHeight;
    }
    formItem[i].addEventListener("input", inputHandler)
    formItem[i].addEventListener("click", clickHandler)
    
}

// function valueHandler (e){
//     e.preventDefault()
//     if (userId.value === undefined ){
//         userId.focus()
//         userId.scrollIntoView(true)
//     }

// }

// form.addEventListener("submit", valueHandler )


function keyHandler(e){
    console.log(e.keyCode)
}

password.addEventListener("keyup", keyHandler)