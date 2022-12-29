const express = require("express")
const router = express.Router()
const controller = require("../controllers/admin.controller")

router.get("/main", controller.view)
router.get("/list", controller.getList)
router.get('/delete', controller.Delete)
router.get('/write', controller.getWrite)
router.get('/view', controller.getView)
router.post('/write', controller.postWrite)
module.exports = router