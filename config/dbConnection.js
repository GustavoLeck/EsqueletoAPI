const mysql = require('mysql');

const connection = function(route){
    console.log(`Connection with DB require`)
    return  mysqlConnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "BobMarley#1981.,",
        database: "music_bot"
    })}

module.exports = function () {

    return connection;
}