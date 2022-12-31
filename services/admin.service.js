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

exports.useApprove = async (userId) => {
    const result = await admin.approve1(userId)
    return result
}

exports.lDown = async (userId) => {
    const result = await admin.levelDown(userId)
    return result
}

exports.lUp = async (userId) => {
    const result = await admin.levelUp(userId)
    return result
}

exports.fPaging = async (page) => {
    const result = await admin.paging(page)
    return result
}

exports.uPaging = async (page) => {
    const result = await admin.userPaging(page)
    return result
}

exports.aNum = async () => {
    const result = await admin.arrayNum()
    return result
}

