const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")

// ======================================== login
router.get('/login', controller.getLogin)

router.post('/login', controller.postLogin)

router.get('/main2', controller.getLogin2)


// ======================================== join
router.get('/join', controller.getInsert)

router.post('/welcome', controller.postInsert)


//============================================ logout
router.get('/logout', controller.logout)

//========================================== profile
router.get('/profile', controller.getProfile)

module.exports = router