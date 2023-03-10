const express = require("express")
const router = express.Router()
const controller = require("../controllers/admin.controller")

router.get("/main", controller.view)

router.get("/list", controller.getList)

router.get('/delete', controller.Delete)

router.get('/write', controller.getWrite)

router.get('/view', controller.getView)

router.post('/write', controller.postWrite)

router.get('/modify', controller.getModify)

router.post('/view', controller.postModify)

router.get('/manage', controller.manageView)

router.get('/approve', controller.approve)

router.get('/leveldown', controller.lvdown)

router.get('/levelup', controller.lvup)
module.exports = router