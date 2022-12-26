const pool = require("./db")

exports.findAll = async () => {
    const [result] = await pool.query(`SELECT * FROM user;`)
    console.log(result)
    return result
}
