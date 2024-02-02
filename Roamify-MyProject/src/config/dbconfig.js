const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Thilina@2003',
    database:'manpower'
});