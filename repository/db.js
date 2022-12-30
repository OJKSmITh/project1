const mysql = require("mysql2")

const Pool = mysql.createPool({
    host: '127.0.0.1',
    port: "3306",
    user: "root",
    password: "95211010!",
    database: "project",
    connectionLimit: 5,
}).promise()

module.exports = Pool