const admin = require("../repository/admin.repository")

exports.getList = async () => {
    const result = await admin.findEvery()
    return result
}

exports.fDelete = async (idx) => {
    const result = await admin.findDelete(idx)
    return result
}

exports.getView = async (idx) => {
    const item = await admin.findOne(idx)
    return item
}

exports.postBoard = async (subject, content, writer) => {
    const boa = await admin.postOne(subject, content, writer)
    return boa
}

exports.lastValue = async () => {
    const result = await admin.findLast()
    return result
}

exports.pModify = async (idx, subject, content, writer) => {
    const result = await admin.postModify(idx, subject, content, writer)
    return result
}

exports.fUser = async () => {
    const result = await admin.findUser()
    return result
}