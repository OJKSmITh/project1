const service = require("../services/board.service")

exports.list = async (req, res, next) => {
    const acc = req.cookies
    if (Object.keys(acc).length === 0) return next(new Error("로그인을 해주세요!"))
    const list = await service.getList()
    res.render('board/list.html', { list })
}

exports.getWrite = async (req, res, next) => {
    res.render('board/write.html')
}

exports.postWrite = async (req, res, next) => {
    const { token } = req.cookies
    const create = await service.postBoard(req.body.subject, req.body.content, token)
    res.redirect('/board/list')
}

exports.view = async (req, res, next) => {
    const [view] = await service.getView(req.query.idx)
    const plus = await service.hPlus(req.query.idx)
    res.render('board/view.html', { view })
}

exports.getModify = async (req, res, next) => {
    const [modify] = await service.getView(req.query.idx)
    res.render('board/modify.html', { modify })
}

exports.postModify = async (req, res, next) => {
    // console.log(req.query.idx)
    const modify = await service.pModify(req.query.idx, req.body.subject, req.body.content, req.body.writer)
    res.redirect(`/board/view?idx=${req.query.idx}`)
}

exports.Delete = async (req, res, next) => {
    const Delete = await service.fDelete(req.query.idx)
    res.redirect('/board/list')
}