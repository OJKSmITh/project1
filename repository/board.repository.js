const pool = require("./db")

exports.findEvery = async () => {
    const [result] = await pool.query(`SELECT * FROM board`)
    return result
}

exports.postOne = async (subject, writer, content) => {
    const [result] = await pool.query(`INSERT INTO board(subject,content,writer) VALUES("${subject}", "${content}", "${writer}");`)
    return result
}

exports.findOne = async (idx) => {
    const [result] = await pool.query(`SELECT * FROM board where idx=${idx}`)
    return result
}

exports.postModify = async (idx, subject, content, writer) => {
    const [result] = await pool.query(`UPDATE board SET subject="${subject}", content="${content}", writer="${writer}" WHERE idx=${idx} ORDER BY idx ASC`)
    console.log(result)
    return result
}

exports.findDelete = async (idx) => {
    const [result] = await pool.query(`DELETE FROM board WHERE idx=${idx}`)
    return result
}

