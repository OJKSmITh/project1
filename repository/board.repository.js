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

exports.findSubValue = async (subject) => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board where subject REGEXP "${subject}";`)
    return result
}

exports.findWriValue = async (writer) => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board where writer REGEXP "${writer}";`)
    return result
}

exports.findWriter = async (writer) => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board where writer="${writer}}"`)
    return result
}


exports.findLevel = async (token) => {
    const [[result]] = await pool.query(`SELECT level from user where userId="${token}"`)
    return result
}

exports.findList = async (token) => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board where writer="${token}" limit 0,10;`)
    return result
}

exports.paging = async (page) => {
    if (page === "1" || page === undefined) {
        const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board limit 0, 10`)
        return result
    } else if (page === "2") {
        const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board limit 10, 10`)

        return result
    } else if (page === "3") {
        const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board limit 20, 10`)
        return result
    } else if (page === "4") {
        const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board limit  30, 10`)
        return result
    } else if (page === "5") {
        const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board limit  40, 10`)
        return result
    }

}


