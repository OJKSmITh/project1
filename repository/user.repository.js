const pool = require("./db")

exports.findAll = async (userId, userPw) => {
    const [result] = await pool.query(`SELECT * FROM user WHERE user_id="${userId}" AND user_pw="${userPw}";`)
    return result
}

