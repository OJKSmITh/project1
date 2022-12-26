const express = require("express")
const router = express.Router()
const board = require("./board.route")
const user = require("./user.route")
const profile = require("./profile.route")


// router.use("/board", board)
router.use("/user", user)
// router.use("/profile", profile)


module.exports = router