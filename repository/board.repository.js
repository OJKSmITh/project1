const pool = require("./db")

exports.findEvery = async () => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board`)
    return result
}

exports.postOne = async (subject, content, writer) => {
    const [result] = await pool.query(`INSERT INTO board(subject,content,writer) VALUES("${subject}", "${content}", "${writer}");`)
    return result
}

exports.findOne = async (idx) => {
    const [[result]] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate, '%Y-%m-%d') as registerDate, hit FROM board where idx=${idx}`)
    return result
}

exports.postModify = async (idx, subject, content, writer) => {
    const [result] = await pool.query(`UPDATE board SET subject="${subject}", content="${content}", writer="${writer}" WHERE idx=${idx} ORDER BY idx ASC`)
    return result
}

exports.findDelete = async (idx) => {
    const [result] = await pool.query(`DELETE FROM board WHERE idx=${idx}`)
    return result
}

exports.hitPlus = async (idx) => {
    const result = await pool.query(`UPDATE board set hit = hit+1 where idx=${idx}`)
    return result
}

exports.findSubject = async (subject) => {
    const [[result]] = await pool.query(`SELECT * FROM board WHERE subject="${subject}"`)
    return result
}

exports.findLast = async () => {
    const [[result]] = await pool.query(`SELECT * FROM board WHERE idx = (SELECT MAX(idx) FROM board)`)
    return result
}

exports.findHitUp = async () => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board ORDER BY hit DESC`)
    return result
}

exports.findHitDown = async () => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board ORDER BY hit ASC`)
    return result
}

exports.findUserId = async (userId) => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board where userId="${userId}"`)
    return result
}

exports.findRegisterDate = async (register) => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board where registerDate="${register}"`)
    return result
}

exports.findLevel = async (token) => {
    const [[result]] = await pool.query(`SELECT level from user where userId="${token}"`)
    return result
}

