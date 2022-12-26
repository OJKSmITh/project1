const service = require("../services/board.service")

exports.list = async (req, res, next) => {
    const list = await service.getList()
    res.render('board/list.html', { list })
}