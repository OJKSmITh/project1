const service = require("../services/profile.service")

exports.getProfile = async (req, res, next) => {
    const { token } = req.cookies
    const { userId, userName, gender, phoneNum, telNum, nickName, idx } = await service.tokenInsert(token)
    const { image } = await service.fImage(token)
    res.render("profile/view.html", { userId, nickName, userName, gender, phoneNum, telNum, idx, image })
}

exports.getModify = async (req, res, next) => {
    const { idx } = req.query
    const { nickName, userName, gender, telNum, phoneNum } = await service.fValue(idx)
    res.render("profile/modify.html", { nickName, userName, gender, telNum, phoneNum, idx })
}

exports.postModify = async (req, res, next) => {
    const { nickName, userName, gender, telNum, phoneNum } = req.body
    const { idx } = req.query
    const result = await service.cValue(nickName, userName, gender, telNum, phoneNum, idx)
    res.redirect("/profile/view")
}

