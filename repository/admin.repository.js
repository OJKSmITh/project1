const pool = require("./db")

exports.findEvery = async () => {
    const [result] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate,'%Y-%m-%d') as registerDate, hit FROM board`)
    return result
}

exports.findDelete = async (idx) => {
    const [result] = await pool.query(`DELETE FROM board WHERE idx=${idx}`)
    return result
}

exports.findOne = async (idx) => {
    const [[result]] = await pool.query(`SELECT idx, subject, content, writer, DATE_FORMAT(registerDate, '%Y-%m-%d') as registerDate, hit FROM board where idx=${idx}`)
    return result
}

exports.postOne = async (subject, content, writer) => {
    const [result] = await pool.query(`INSERT INTO board(subject,content,writer) VALUES("${subject}", "${content}", "${writer}");`)
    return result
}

exports.findLast = async () => {
    const [[result]] = await pool.query(`SELECT * FROM board WHERE idx = (SELECT MAX(idx) FROM board)`)
    return result
}

exports.postModify = async (idx, subject, content, writer) => {
    const [result] = await pool.query(`UPDATE board SET subject="${subject}", content="${content}", writer="${writer}" WHERE idx=${idx} ORDER BY idx ASC`)
    return result
}

exports.findUser = async () => {
    const [result] = await pool.query(`SELECT idx, userId, level FROM user order by idx limit 1, 10;`)
    return result
}

exports.approve1 = async (userId) => {
    const [result] = await pool.query(`UPDATE user SET level='1' where userId="${userId}"`)
    return result
}


exports.levelDown = async (userId) => {
    const [result] = await pool.query(`UPDATE user SET level=level-1 where userId="${userId}"`)
    return result
}

exports.levelUp = async (userId) => {
    const [result] = await pool.query(`UPDATE user SET level=level+1 where userId="${userId}"`)
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

exports.userPaging = async (page) => {
    if (page === "1" || page === undefined) {
        page = 1
        const [result] = await pool.query(`SELECT userId, level FROM user limit ${page}, 10`)
        return result
    } else {
        const [result] = await pool.query(`SELECT userId, level FROM user limit ${(page - 1) * 10 + 1}, 10`)
        return result
    }
}

exports.arrayNum = async () => {
    const [[result]] = await pool.query(`SELECT COUNT(*) FROM user`)
    return result
}
