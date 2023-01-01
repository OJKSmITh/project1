const gnbBtn = document.querySelector(".hamburger_btn")
const gnb = document.querySelector("#gnb")
const bg1 = document.querySelector("#bg1")
const bg2 = document.querySelector("#bg2")
const bg_wrap = document.querySelector("#container_wrap")
const playBtn = document.querySelector("#playBtn")
const closeBtn = document.querySelector("#close")
const picBtn = document.querySelector("#profilePic")
const popup = document.querySelector("#popup_wrap")
const img = document.querySelector("#popup")
const dp1 = document.querySelector("#view_wrap")
const dp2 = document.querySelector("#popheader")
const welcome = document.querySelector("#welcome")


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
    if(bg_wrap.scrollTop > value2 * 1.78 * 2){
        bg_wrap.style.background = "url(/img/jang_bg.jpeg) no-repeat 50% 50% "
    }
    if(bg_wrap.scrollTop > value2 * 1.35 * 4){
        bg_wrap.style.background = "url(/img/baek_bg.jpeg) no-repeat 50% 50% "
    }    
    if(bg_wrap.scrollTop > value2 * 1.75 * 5){
        bg_wrap.style.background = "url(/img/logo2.png) no-repeat 50% 50%"
    }
    // if(bg_wrap.scrollTop > 500) {
    //     welcome.style.transform = "rotateX(-210dex)"
    //     welcome.style.transform = "scale(1.3)"
    //     welcome.style.transition = "all 0.5s"
    // }
    if(bg_wrap.scrollTop > 1500) {
        welcome.style.transform = "rotateX(0dex)"
        welcome.style.transform = "scale(1)"
        welcome.style.transition = "all 0.5s"
    }else if(500<=bg_wrap.scrollTop <= 1500){
        welcome.style.transform = "rotateX(-210dex)"
        welcome.style.transform = "scale(1.3)"
        welcome.style.transition = "all 0.5s"
    }else if (bg_wrap.scrollTop < 500) {
        welcome.style.transform = "rotateX(90dex)"
    }
})



playBtn.addEventListener("click", ()=>{
    const play = new Audio("/img/everland.mp3")
    play.play()
},{once : true})

closeBtn.addEventListener ("click", (e)=>{
    popup.classList.toggle("popOff")
    img.classList.toggle("none")
    dp1.classList.toggle("none")
    dp2.classList.toggle("none")

})
picBtn.addEventListener("click",()=>{
    popup.classList.toggle("popOff")
    img.classList.toggle("none")
    dp1.classList.toggle("none")
    dp2.classList.toggle("none")
})




let slideindex = 0
const slideItems = document.querySelector("#slideItems")
const prev = document.querySelector("#preBtn")
const next = document.querySelector("#nextBtn")



function slideshow (){
    let index = slideindex === 2 ? 0 : ++slideindex
    slideItems.style.left = -index * 120 + 'rem' 
    slideindex = index
}
intervalId = setInterval(slideshow, 1500)


function prevHandler (e){
    clearInterval(intervalId)
    let index = slideindex === 0 ? 2 : --slideindex
    slideItems.style.left = -index * 120 + 'rem' 
    slideindex = index
    intervalId = setInterval(slideshow, 1500)
}

function nextHandler(e){
    clearInterval(intervalId)
    let index = slideindex === 2 ? 0 : ++slideindex
    slideItems.style.left = -index * 120 + 'rem' 
    slideindex = index
    intervalId = setInterval(slideshow, 1500)
}
prev.addEventListener('click', prevHandler)
next.addEventListener('click', nextHandler)

