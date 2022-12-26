const service = require("../services/board.service")

exports.list = async (req, res, next) => {
    const list = await service.getList()
    res.render('board/list.html', { list })
}

exports.getWrite = async (req, res, next) => {
    res.render('board/write.html')
}

exports.postWrite = async (req, res, next) => {
    const create = await service.postBoard(req.body.subject, req.body.content, req.body.writer)
    res.redirect('/board/list')
}

exports.view = async (req, res, next) => {
    const [view] = await service.getView(req.query.idx)
    res.render('board/view.html', { view })
}