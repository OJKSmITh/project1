// currentPage: 현재 페이지
// totalCount: 총 데이터의 갯수
// pageCount: 화면에 나타날 페이지 갯수
// limit: 한 페이지 당 나타낼 데이터의 갯수

//임의 의 갯수 50
const currentPage = 1
const totalCount = idx
const pageCount = 10
const limit = 10
let totalPage = Math.ceil(totalCount / limit)
let page = 1


let lastNumber = pageGroup * pageCount 
if (lastNumber > totalPage) {
  lastNumber = totalPage
}
let firstNumber = lastNumber - (pageCount - 1) 

const next = lastNumber + 1 
const prev = firstNumber - 1 