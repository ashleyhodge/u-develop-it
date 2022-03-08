const mysql = require('mysql2');


//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your SQL username
        user: 'root',
        // Your mySQL password
        password: '',
        database: 'election'
    }
);

module.exports = db;