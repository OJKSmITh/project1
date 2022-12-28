const pool = require("./db")

exports.findToken = async (token) => {
    const [[result]] = await pool.query(`select * from user where userId="${token}";`)
    return result
}

exports.changeValue = async (nickName, userName, gender, telNum, phoneNum, idx) => {
    const [result] = await pool.query(`UPDATE user SET nickName="${nickName}",userName="${userName}",gender="${gender}",telNum="${telNum}",phoneNum="${phoneNum}" where idx=${idx};`)
    return result
}

exports.findValue = async (idx) => {
    const [[result]] = await pool.query(`SELECT * FROM user where idx=${idx}`)
    return result
}

