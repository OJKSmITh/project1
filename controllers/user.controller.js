const service = require("../services/user.service")

exports.getLogin = (req, res, next) => {
    res.render('user/login.html')
}

exports.postLogin = async (req, res, next) => {
    const { userId, userPw, nickName } = req.body
    const create = await service.findLogin(userId, userPw, nickName)
    if (create !== undefined) {
        res.setHeader("Set-Cookie", `token=${create.nickName};path=/`)
        res.redirect('/user/main2')
    } else {
        res.redirect('/user/login')
    }
}
// 3항
// 특정변수 담은 값이 옳을떄 실행하는것 

exports.getLogin2 = (req, res, next) => {
    const { token } = req.cookies
    res.render('user/main2.html', { token })
}

exports.getInsert = (req, res, next) => {
    res.render("user/join.html")
}

exports.postInsert = async (req, res, next) => {
    const { userId, userPw, userName, nickName, birth, gender, phoneNum, telNum } = req.body
    const insert = await service.insert(userId, userPw, userName, nickName, birth, gender, phoneNum, telNum)
    res.render("user/welcome.html", { userId })
    // res.redirect('/user/login')
}

exports.logout = (req, res, next) => {
    res.setHeader("Set-Cookie", `token=;path=/;max-Age=0;`)
    res.redirect('/')
}