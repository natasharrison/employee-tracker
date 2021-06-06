const mysql = require('mysql2');
require('dotenv').config()

console.log(process.env.MYSQL_PASSWORD);

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_PASSWORD,
        database: 'company'
    }
);

module.exports = db;