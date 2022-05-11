const mysql = require('mysql2')
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: 'admin',
    database: 'node-complete',
    password: process.env.PASS,
    connectionLimit: 10
})

module.exports = pool.promise()