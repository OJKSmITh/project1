const pool = require("./db")

exports.findEvery = async () => {
    const [result] = await pool.query(`SELECT * FROM board`)
    return result
}

exports.postOne = async (subject, writer, content) => {
    const [result] = await pool.query(`INSERT INTO board(subject,content,writer) VALUES("${subject}", "${content}", "${writer}");`)
    return result
}