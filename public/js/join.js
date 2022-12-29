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
            if(i-1 >= 0){
                formItem[i-1].classList="itemAdd2"
            }
        }else{
            formItem[i+1].classList ="itemNone"
        }
    }
    const clickHandler =(e) =>{
        items.scrollTop = items.scrollHeight;
        // console.dir(e.target.scrollHeight)
        // console.dir(e.target.scrollTop)
        

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

// let keyCodeArr1 = []
// let keyCodeArr2 = []

// function keyHandler(e){
//     keyCodeArr1 += e.keyCode
//     console.log(keyCodeArr1)
// }
// function keyHandler2(e){
//     keyCodeArr2 += e.keyCode
//     console.log(keyCodeArr2)
// }

// password.addEventListener("keyup", keyHandler)
// passwordCheck.addEventListener("keyup", keyHandler2)

// function checkPw(){
//     if(keyCodeArr1 !== keyCodeArr2){
//         password.focus()
//         pwFalse.style.display="block"
//     }else {
//         pwTrue.style.display="block"
//         history.back()
//     }
// }

// passwordCheck.addEventListener("blur", checkPw)