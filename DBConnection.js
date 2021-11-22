const mysql = require('mysql');

function newConnection()
{
    let conn = mysql.createConnection({
        host:'34.139.247.88',
        user: 'root',
        password:'mypassword',
        database:'MyStoreDB'
    });
    return conn;
}
module.exports = newConnection;