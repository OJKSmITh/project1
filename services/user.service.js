const user = require("../repository/user.repository")
const db = require("../repository/db")
const { response } = require('express')

exports.findLogin = async (userId, userPw) => {
    const [result] = await user.findAll(userId, userPw)
    return result
}

exports.insert = async (userId, userPw) => {
    const insert = await user.insertRow(userId, userPw)
    return insert
}