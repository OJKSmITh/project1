let checkValue = document.getElementById("searchForm")
let msgEle = document.getElementById("userId")


checkValue.addEventListener("submit", function (e) {
    if (msgEle.value.length === 0) {
        e.preventDefault()
        alert("아이디 값을 입력해주세요")
        msgEle.focus()
    }
})

password.addEventListener("click", (e) => {
    if (msgEle.value === "") {
        msgEle.focus()
        msgEle.classList = "itemAdd"
        items.scrollTop -= 105
    }
})
