const express = require("express")
const router = express.Router()
const board = require("./board.route")
const user = require("./user.route")
const profile = require("./profile.route")
const admin = require("./admin.route")


router.use("/user", user)
router.use("/board", board)
router.use("/profile", profile)
router.use("/admin", admin)

module.exports = router