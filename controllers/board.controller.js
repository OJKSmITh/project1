const service = require("../services/board.service")

exports.list = (req, res, next) => {
    res.render('board/list.html')
}