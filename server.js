const express = require("express")
const nunjucks = require("nunjucks")
const router = require("./routes")
const mysql = require("mysql2")
const cookieParser = require("cookie-parser")
const multer = require("multer")
const path = require("path")

const app = express()

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, 'uploads/')
        },
        filename: (req, file, done) => {
            const ext = path.extname(file.originalname) // . 기준으로 짜름 , split과 유사, 맨 마지막 .을 기준으로 함 
            const filename = path.basename(file.originalname, ext) + '_' + Date.now() + ext
            done(null, filename)
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 5mb
})

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app
})


app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/image', express.static('./uploads'))

app.use(router)

app.get('/', (req, res, next) => {
    res.render("main.html")
})

app.use((error, req, res, next) => {
    res.send(`
        <script type='text/javascript'>
        alert("${error.message}");
        history.back();
        </script>
    `)
})


app.listen(3000, () => {
    console.log("서버열림")
})