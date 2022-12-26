const express = require("express")
const nunjucks = require("nunjucks")
const router = require("./routes")

const app = express()

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app
})

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))

app.use(userRouter)

app.get('/', (req, res, next) => {
    res.render("main.html")
})


app.listen(3000, () => {
    console.log("서버열림")
})