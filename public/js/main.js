const gnbBtn = document.querySelector(".hamburger_btn")
const gnb = document.querySelector("#gnb")
const bg1 = document.querySelector("#bg1")
const bg2 = document.querySelector("#bg2")
const bg_wrap = document.querySelector("#container_wrap")
const playBtn = document.querySelector("#playBtn")


const gnbBtnHandler = (e) => {
    gnb.classList.toggle('gnbon')
}

gnbBtn.addEventListener("click", gnbBtnHandler)

bg_wrap.addEventListener('scroll', function () {    //스크롤시 이벤트가 실행된다.
    let value = bg_wrap.scrollY;    //세로 스크롤 값을 value 함수에 저장한다.
    let value2 = window.innerHeight
    console.log(value2)


    console.log(bg_wrap.scrollTop)
    if(bg_wrap.scrollTop < value2 * 1.78 ){
        bg_wrap.style.background = "url(/img/jang_bg.jpeg) no-repeat 50% 50%"
    }      
    if(bg_wrap.scrollTop > value2 * 1.78){
        bg_wrap.style.background = "url(/img/jang_bg.jpeg) no-repeat 50% 50% "
    }
    if(bg_wrap.scrollTop > value2 * 1.78 * 2){
        bg_wrap.style.background = "url(/img/baek_bg.jpeg) no-repeat 50% 50% "
    }    
    if(bg_wrap.scrollTop > value2 * 1.9 * 3){
        bg_wrap.style.background = "url(/img/logo2.png) no-repeat 50% 50%"
    }


})

playBtn.addEventListener("click", ()=>{
    const play = new Audio("/img/everland.mp3")
    play.play()
},{once : true})