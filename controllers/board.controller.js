const service = require("../services/board.service")

exports.list = async (req, res, next) => {
    const acc = req.cookies
    if (Object.keys(acc).length === 0) return next(new Error("로그인을 해주세요!"))
    const list = await service.getList()
    res.render('board/list.html', { list })
}

exports.getWrite = async (req, res, next) => {
    const acc = req.cookies
    if (Object.keys(acc).length === 0) return next(new Error("로그인을 해주세요!"))
    const { token } = req.cookies
    res.render("board/write.html", { token })
}

exports.postWrite = async (req, res, next) => {
    const { token } = req.cookies
    const { subject, content } = req.body
    if (subject === "" && content === "") return next(new Error("값을 넣어주세요"))
    const create = await service.postBoard(subject, content, token)
    const { idx } = await service.lastValue()
    res.redirect(`/board/view?idx=${idx}`)
}

exports.view = async (req, res, next) => {
    const acc = req.cookies
    if (Object.keys(acc).length === 0) return next(new Error("로그인을 해주세요!"))
    const { subject, content, writer, registerDate, idx } = await service.getView(req.query.idx)
    const { token } = req.cookies
    const { level } = await service.fLevel(token)
    const plus = await service.hPlus(req.query.idx)
    res.render('board/view.html', { subject, content, writer, registerDate, idx, token, level })
}

exports.getModify = async (req, res, next) => {
    const acc = req.cookies
    if (Object.keys(acc).length === 0) return next(new Error("로그인을 해주세요!"))
    const { idx, subject, writer, content, registerDate } = await service.getView(req.query.idx)
    res.render('board/modify.html', { idx, subject, writer, content, registerDate })
}

exports.postModify = async (req, res, next) => {
    const { idx, subject, content, writer } = req.body
    if (subject === "" && content === "") return next(new Error("값을 넣어주세요"))
    const modify = await service.pModify(idx, subject, content, writer)
    res.redirect(`/board/view?idx=${req.query.idx}`)
}

exports.Delete = async (req, res, next) => {
    const Delete = await service.fDelete(req.query.idx)
    res.redirect('/board/list')
}

exports.findArrange = async (req, res, next) => {
    const { index } = req.query
    if (index === "hitup") {
        const findHitUp = await service.fHitUp()
        res.render("board/view1.html", { findHitUp, index })
    } else {
        const findHitDown = await service.fHitDown()
        res.render("board/view1.html", { findHitDown, index })
    }
}

exports.findvalue = async (req, res, next) => {
    const { column, findValue } = req.body
    if (column === "제목") {
        const result = await service.lastSubjectValue(findValue)
        res.render("board/view1.html", { result, column })
    } else {
        const result2 = await service.lastWriValue(findValue)
        res.render("board/view1.html", { result2, column })
    }
}