const dbConnection = require("../../config/dbConnection")

module.exports = function (app) {

    var mysqlConnection = dbConnection();

    app.get('/musica', function (req, res) {

        mysqlConnection.query(`SELECT * FROM MUSICA`, function (err, result) {
            res.send(result)
        })
    })
}