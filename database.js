const mysql = require('mysql');

var conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database: 'workindia'
});

module.exports = conn