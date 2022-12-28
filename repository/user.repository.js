const pool = require("./db")

exports.findAll = async (userId, userPw) => {
    const [result] = await pool.query(`SELECT * FROM user WHERE userId="${userId}" AND userPw="${userPw}";`)
    return result
}

exports.insertRow = async (userId, userPw, userName, nickName, birth, gender, phoneNum, telNum, filename) => {
    const insert = await pool.query(`INSERT INTO user(userId,userPw,userName,nickName,birth,gender,phoneNum,telNum,image) VALUES("${userId}","${userPw}","${userName}","${nickName}","${birth}","${gender}","${phoneNum}","${telNum}","${filename}")`)
}

exports.findtoken = async (token) => {
    const [[result]] = await pool.query(`select * from user where userId="${token}";`)
    return result
}

exports.findImage = async (token) => {
    const [[result]] = await pool.query(`SELECT * FROM user where userId="${token}"`)
    return result
}

