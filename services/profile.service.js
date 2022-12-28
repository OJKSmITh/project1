const profile = require("../repository/profile.repository")


exports.tokenInsert = async (token) => {
    const result = await profile.findToken(token)
    return result
}

exports.cValue = async (nickName, userName, gender, telNum, phoneNum, idx) => {
    const result = await profile.changeValue(nickName, userName, gender, telNum, phoneNum, idx)
    return result
}

exports.fValue = async (idx) => {
    const result = await profile.findValue(idx)
    return result
}


