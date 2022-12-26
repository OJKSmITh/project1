const express = require("express")
const router = express.Router()
const controller = require('../controllers/board.controller')

router.get('/list', controller.list)

router.get('/write', controller.getWrite)

router.post('/write', controller.postWrite)


module.exports = router