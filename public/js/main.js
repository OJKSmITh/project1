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
    if(bg_wrap.scrollTop > value2 * 1.68){
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




const slideItems = document.querySelector("#slideItems")
let slideindex = 1
const prev = document.querySelector("#preBtn")
const next = document.querySelector("#nextBtn")

function slideshow (){
    if(slideindex === 3) slideindex = 0
    slideItems.style.left = -slideindex * 120 + 'rem' 
    slideindex++
}


function prevHandler (){
    clearInterval(intervalId)
    slideindex--
    if(slideindex === -1) {
        slideindex = 2
    }   
    slideItems.style.left = -slideindex * 120 + 'rem' 
    let intervalId = setInterval(slideshow, 1500)
}

function nextHandler(){
    clearInterval(intervalId)
    slideindex++
    if(slideindex === 3) {
        slideindex = 0
    }   
    slideItems.style.left = -slideindex * 120 + 'rem' 
    let intervalId = setInterval(slideshow, 1500)

}
prev.addEventListener('click', prevHandler);
next.addEventListener('click', nextHandler);

let intervalId = setInterval(slideshow, 1500)

// next.addEventListener('click',  ()=> {
//     clearInterval()
//     console.log(slideindex)
//     if (slideindex !== 1){
//         slideindex += 1
//     }else{
//         slideindex = -1
//     }
//     slideshow
// });
