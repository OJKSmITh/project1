const express = require("express")
const router = express.Router()
const controller = require('../controllers/board.controller')

router.get('/list', controller.list)

router.get('/list2', controller.tokenlist)

router.post('/view1', controller.findvalue)

router.get('/write', controller.getWrite)

router.post('/write', controller.postWrite)

router.get('/view', controller.view)

router.get('/view1', controller.findArrange)

router.get('/modify', controller.getModify)

router.post('/view', controller.postModify)

router.get('/delete', controller.Delete)


module.exports = router