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


function checkPw() {
    console.log(password.value)
    if (password.value !== passwordCheck.value) {
        passwordCheck.focus()
        pwFalse.style.display = "block"
        pwTrue.style.display = "none"
    }
    if (password.value === passwordCheck.value) {
        pwTrue.style.display = "block"
        pwFalse.style.display = "none"
        // history.back()
    }

}
function valueHandler (e){
    e.preventDefault()
    if (userId.value === "" ){
        userId.focus()
        userId.scrollIntoView(true)
    }

}
passwordCheck.addEventListener("blur", checkPw)


for(let i = 0; i<10; i++){
    formItem[0].classList ="itemAdd"
    formItem[i+2].classList ="itemNone"


    const inputHandler = (e) => {
        const target = e.target
        console.log(target)
        if (target.value !== "" || target.value !== undefined) {
            formItem[i + 1].classList = "itemAdd"
            if(i ===8)formItem[i + 2].classList = "itemAdd"
            if (i - 1 >= 0 ) {
                formItem[i-1].classList = "itemAdd2"
            }
        } else {
            formItem[i + 1].classList = "itemNone"
        }
    }
    const clickHandler = (e) => {
        items.scrollTop += 105
    }

    const clickItemHandler = () =>{
        formItem[i].classList = "itemAdd"
    }
    const clickItemHandler2 = () =>{
        formItem[i].classList = "itemAdd2"
    }


    
    formItem[i].addEventListener("input", inputHandler)
    formItem[i].addEventListener("input", clickHandler,{once : true})
    formItem[i].addEventListener("click", clickItemHandler)
    formItem[i].addEventListener("blur", clickItemHandler2)
}



form.addEventListener("submit", valueHandler )

