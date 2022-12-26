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
