const user = require("../repository/user.repository")
const db = require("../repository/db")
const { response } = require('express')

exports.findLogin = async (userId, userPw) => {
    const [result] = await user.findAll()
    if (userId && userPw) {
        db.query(`SELECT * FROM user WHERE user_id="${userId}" AND user_pw="${userPw}"`), function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                response.redirect("/user/main2")
            }
        }
    }
}
