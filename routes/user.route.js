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


//============================================
router.get('/logout', controller.logout)


module.exports = router