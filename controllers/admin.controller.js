const service = require("../services/admin.service")

exports.view = (req, res, next) => {
    const { token } = req.cookies
    res.render("admin/main.html", { token })
}

exports.getList = async (req, res, next) => {
    const result = await service.getList()
    res.render("admin/list.html", { result })
}

exports.Delete = async (req, res, next) => {
    const { idx } = req.query
    await service.fDelete(idx)
    res.redirect('/admin/list')
}

exports.getView = async (req, res, next) => {
    const { token } = req.cookies
    const { idx } = req.query
    const { subject, content, writer, registerDate } = await service.getView(idx)
    res.render("admin/view.html", { subject, content, writer, registerDate, token, idx })
}

exports.getWrite = async (req, res, next) => {
    const { token } = req.cookies
    res.render("admin/write.html", { token })
}

exports.postWrite = async (req, res, next) => {
    const { token } = req.cookies
    const { subject, content } = req.body
    const create = await service.postBoard(subject, content, token)
    const { idx } = await service.lastValue()
    res.redirect(`/admin/view?idx=${idx}`)
}

exports.getModify = async (req, res, next) => {
    const { idx, subject, writer, content, registerDate } = await service.getView(req.query.idx)
    res.render('admin/modify.html', { idx, subject, writer, content, registerDate })
}

exports.postModify = async (req, res, next) => {
    const { idx, subject, content, writer } = req.body
    const modify = await service.pModify(idx, subject, content, writer)
    res.redirect(`/admin/view?idx=${req.query.idx}`)
}

exports.manageView = async (req, res, next) => {
    const { token } = req.cookies
    const list = await service.fUser()
    res.render('admin/manage.html', { list, token })
}

exports.approve = async (req, res, next) => {
    const { userId } = req.query
    const result = await service.useApprove(userId)
    res.redirect('/admin/manage')
}

exports.lvdown = async (req, res, next) => {
    const { userId } = req.query
    const result = await service.lDown(userId)
    res.redirect('/admin/manage')
}

exports.lvup = async (req, res, next) => {
    const { userId } = req.query
    const result = await service.lUp(userId)
    res.redirect('/admin/manage')
}