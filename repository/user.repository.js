const pool = require("./db")

exports.findAll = async (userId, userPw) => {
    const [result] = await pool.query(`SELECT * FROM user WHERE userId="${userId}" AND userPw="${userPw}";`)
    return result
}

exports.insertRow = async (userId, userPw, userName, nickName, birth, gender, phoneNum, telNum) => {
    const insert = await pool.query(`INSERT INTO user(userId,userPw,userName,nickName,birth,gender,phoneNum,telNum) VALUES("${userId}","${userPw}","${userName}","${nickName}","${birth}","${gender}","${phoneNum}","${telNum}")`)
}


exports.findToken = async (token) => {
    const [[result]] = await pool.query(`select * from user where userId="${token}";`)
    return result
}

