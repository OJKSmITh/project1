const formItem = document.querySelectorAll("form > div")

for(let i = 0; i<9; i++){
    formItem[i+1].style.display = "none";
    const inputHandler = (e) =>{
        const target = e.target
        console.log(e.target.value === "" || e.target.value === undefined)
        if(target.value !== "" || target.value !== undefined ){
            formItem[i+1].style.display ="block"
        }else{
            formItem[i+1].style.display ="none"
        }
    }
    formItem[i].addEventListener("input", inputHandler)
}


