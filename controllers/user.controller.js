const service = require("../services/user.service")

exports.getLogin = (req, res, next) => {
    res.render('user/login.html')
}

exports.postLogin = async (req, res, next) => {
    const create = await service.findLogin(req.body.userId, req.body.userPw)
    if (create !== undefined) {
        res.redirect('/user/main2')
    } else {
        res.redirect('/user/login')
    }

}

exports.getLogin2 = (req, res, next) => {
    res.render('user/main2.html')
}


exports.getInsert = (req, res, next) => {
    res.render("user/join.html")
}

exports.postInsert = async (req, res, next) => {
    const insert = await service.insert(req.body.userId, req.body.userPw, req.body.userName, req.body.nickName, req.body.birth, req.body.gender, req.body.phoneNum, req.body.telNum)
    res.redirect('/user/login')
}