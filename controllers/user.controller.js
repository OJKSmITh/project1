const service = require("../services/user.service")

exports.getLogin = (req, res, next) => {
    res.render('user/login.html')
}

exports.postLogin = async (req, res, next) => {
    const { userId, userPw } = req.body
    const create = await service.findLogin(userId, userPw)
    if (create !== undefined && create.level !== 0) {
        if (userId === "admin") {
            res.setHeader("Set-Cookie", `token=${create.userId};path=/`)
            res.redirect(`/admin/main`)
        } else {
            res.setHeader("Set-Cookie", `token=${create.userId};path=/`)
            res.redirect(`/user/main2`)
        }
    } else {
        next(new Error("조건을 확인해주세요"))
    }
}
// 3항
// 특정변수 담은 값이 옳을떄 실행하는것 

exports.getLogin2 = async (req, res, next) => {
    const { token } = req.cookies
    const { idx } = await service.fToken(token)
    const { image } = await service.fImage(token)
    res.render('user/main2.html', { token, idx, image })
}

exports.getInsert = (req, res, next) => {
    res.render("user/join.html")
}

exports.postInsert = async (req, res, next) => {
    const { userId, userPw, userName, nickName, birth, gender, phoneNum, telNum, idx } = req.body
    const insert = await service.insert(userId, userPw, userName, nickName, birth, gender, phoneNum, telNum, req.file.filename)
    const { token } = req.cookies

    const { image } = await service.fImage(userId)
    res.render("user/welcome.html", { userId, userName, gender, phoneNum, telNum, image })

}

exports.logout = (req, res, next) => {
    res.setHeader("Set-Cookie", `token=;path=/;max-Age=0;`)
    res.redirect('/')
}

exports.idcheck = async (req, res, next) => {

    const userId = req
    const [result] = await service.fIdcheck(userId)
    if (result === undefined) {
        next(new Error("회원가입이 가능합니다."))
    } else {
        next(new Error("아이디가 중복됩니다."))
    }
}