const formItem = document.querySelectorAll("form > div")
const userPw = document.querySelectorAll("userPw")
const userPwCheck = document.querySelectorAll("#userPwCheck")
const pwTrue = document.querySelector("#pwTrue")
const pwFalse = document.querySelector("#pwFalse")
const items = document.querySelector("#items")

for(let i = 0; i<9; i++){
    formItem[0].classList ="itemAdd"
    formItem[i+1].classList ="itemNone"

    const inputHandler = (e) =>{
        const target = e.target
        if(target.value !== "" || target.value !== undefined ){
            formItem[i+1].classList="itemAdd"
            formItem[i-1].classList="itemAdd"
            formItem[i-1].classList="itemAdd2"
        }else{
            formItem[i+1].classList ="itemNone"

        }
        items.scrollTop = items.scrollHeight
    }
    formItem[i].addEventListener("input", inputHandler)
    
    console.log(userPw.value)
}
// if(formItem[1].value !== formItem[2].value){
//     pwFalse.style.display ="block"
// } else {
//     pwTrue.style.display ="block"
// }