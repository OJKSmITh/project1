let checkValue = document.getElementById("searchForm")
let msgEle = document.getElementById("userId")
let chva = 0

checkValue.addEventListener("submit", function (e) {
    if (msgEle.value === "") {
        alert("아이디 값을 입력해주세요")
        e.preventDefault()
        msgEle.focus()
    }
    chva += 1
})

password.addEventListener("click", (e) => {
    if (msgEle.value === "" && chva === 0) {
        alert("아이디 값을 입력해주세요")
        msgEle.focus()
        msgEle.classList = "itemAdd"
        items.scrollTop -= 105
    } else if (msgEle.value === "" && chva !== 1) {
        chva = 0
        msgEle.focus()
        alert("아이디 값을 입력해주세요")
    }
})
