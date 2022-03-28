const mysql = require('mysql');

module.exports = function () {
     return  mysqlConnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "BobMarley#1981.,",
        database: "music_bot"
    })
}