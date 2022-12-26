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

// console.log(result)
//     if (result.length !== 0) {
//         response.redirect("/user/main2")
//     } else {
//         response.redirect("/user/login")
//     }
