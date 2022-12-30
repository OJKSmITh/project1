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

exports.fHitUp = async () => {
    const result = await board.findHitUp()
    return result
}

exports.fHitDown = async () => {
    const result = await board.findHitDown()
    return result
}

exports.fId = async (userId) => {
    const result = await board.findUserId(userId)
    return result
}

exports.fLevel = async (token) => {
    const result = await board.findLevel(token)
    return result
}

exports.lastSubjectValue = async (subject) => {
    const result = await board.findSubValue(subject)
    return result
}

exports.lastWriValue = async (writer) => {
    const result = await board.findWriValue(writer)
    return result
}

exports.fList = async (token) => {
    const result = await board.findList(token)
    return result
}