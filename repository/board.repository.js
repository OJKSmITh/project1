const pool = require("./db")

exports.findEvery = async () => {
    const [result] = await pool.query(`SELECT * FROM board`)
    return result
}