const service = require("../services/user.service")

exports.getLogin = (req, res, next) => {
    res.render('user/login.html')
}

exports.postLogin = (req, res, next) => {
    res.redirect('/user/main2')
}

exports.getLogin2 = (req, res, next) => {
    res.render('user/main2.html')
}