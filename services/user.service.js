const user = require("../repository/user.repository")
const db = require("../repository/db")
const { response } = require('express')

exports.findLogin = async (userId, userPw) => {
    const [result] = await user.findAll(userId, userPw)
    return result
}

exports.insert = async (userId, userPw, userName, nickName, birth, gender, phoneNum, telNum, filename) => {
    const insert = await user.insertRow(userId, userPw, userName, nickName, birth, gender, phoneNum, telNum, filename)
    return insert
}

exports.fToken = async (token) => {
    const result = await user.findtoken(token)
    return result
}

exports.fImage = async (token) => {
    const result = await user.findImage(token)
    return result
}

exports.fIdcheck = async (userId) => {
    const result = await user.findIdcheck(userId)
    return result
}


