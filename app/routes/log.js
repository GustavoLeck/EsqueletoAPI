const dbConnection = require("../../config/dbConnection")

module.exports = function (app) {

    var mysqlConnection = dbConnection();

    app.get('/log', function (req, res) {

        mysqlConnection.query(`SELECT * FROM LOG`, function (err, result) {
            res.send(result)
        })
    })
}