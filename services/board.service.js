const board = require("../repository/board.repository")

exports.getList = async () => {
    const result = await board.findEvery()
    return result
}

exports.postBoard = async (subject, content, writer) => {
    const boa = await board.postOne(subject, content, writer)
    return boa
}

exports.getView = async (idx) => {
    const item = await board.findOne(idx)
    return item
}

exports.pModify = async (idx, subject, content, writer) => {
    const result = await board.postModify(idx, subject, content, writer)
    return result
}

exports.fDelete = async (idx) => {
    const result = await board.findDelete(idx)
    return result
}

exports.hPlus = async (idx) => {
    const result = await board.hitPlus(idx)
    return result
}

exports.fSubject = async (subject) => {
    const result = await board.findSubject(subject)
    return result
}

exports.lastValue = async () => {
    const result = await board.findLast()
    return result
}

exports.fHit = async () => {
    const result = await board.findHit()
    return result
}

exports.fId = async (userId) => {
    const result = await board.findUserId(userId)
    return result
}

exports.fRegister = async (register) => {
    const result = await board.findRegisterDate(register)
    return result
}