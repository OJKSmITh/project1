const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")
const multer = require("multer")
const path = require("path")

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, 'uploads/')
        },
        filename: (req, file, done) => {
            const ext = path.extname(file.originalname) // . 기준으로 짜름 , split과 유사, 맨 마지막 .을 기준으로 함 
            const filename = Date.now() + ext // 고유한 키 값을 위해서 시간 사용
            done(null, filename)
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 5mb
})

// ======================================== login
router.get('/login', controller.getLogin)

router.post('/login', controller.postLogin)

router.get('/main2', controller.getLogin2)


// ======================================== join
router.get('/join', controller.getInsert)

router.post('/welcome', upload.single('upload'), controller.postInsert)


//============================================ logout
router.get('/logout', controller.logout)

//========================================== profile

module.exports = router

// 라우터: 패턴을 쓰고 있기때문에 공유가됨 