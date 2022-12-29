const gnbBtn = document.querySelector(".hamburger_btn")
const gnb = document.querySelector("#gnb")
const bg1 = document.querySelector("#bg1")
const bg2 = document.querySelector("#bg2")
const bg_wrap = document.querySelector("#container_wrap")

const gnbBtnHandler =(e)=>{
    gnb.classList.toggle('gnbon')
}

gnbBtn.addEventListener("click", gnbBtnHandler)

bg_wrap.addEventListener('scroll',  function(){    //스크롤시 이벤트가 실행된다.
    let value = bg_wrap.scrollY;    //세로 스크롤 값을 value 함수에 저장한다.
    // console.log(bg_wrap.scrollTop)
    let value2 = window.innerHeight
    console.log(value2)
    if(bg_wrap.scrollTop < value2 * 1.54){
        bg_wrap.style.background = "url(/img/logo.png) no-repeat 50% 50%"
    }
    if(bg_wrap.scrollTop > value2 * 1.54){
        bg_wrap.style.backgroundImage = "url(/img/blockchain2.jpg)"
    }
    if(bg_wrap.scrollTop > value2 * 1.54 * 2){
        bg_wrap.style.backgroundImage = "url(/img/blockchain.jpg)"
    }
    if(bg_wrap.scrollTop > value2 * 1.54 * 3){
        bg_wrap.style.backgroundImage = "url(/img/blockchain2.jpg)"
    }
   
})