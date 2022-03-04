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
    },
    console.log('Connected to the election database.')
);

module.exports = db;