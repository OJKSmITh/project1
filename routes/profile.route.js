const express = require("express")
const router = express.Router()
const controller = require("../controllers/profile.controller")

router.get("/view", controller.getProfile)
router.get("/modify", controller.getModify)

router.post("/modify", controller.postModify)

module.exports = router