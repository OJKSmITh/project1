const gnbBtn = document.querySelector(".hamburger_btn")
const gnb = document.querySelector("#gnb")

const gnbBtnHandler =(e)=>{
    gnb.classList.toggle('gnbon')
}

gnbBtn.addEventListener("click", gnbBtnHandler)