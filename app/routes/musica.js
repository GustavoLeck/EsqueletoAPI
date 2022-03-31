const route = "MUSICA"
module.exports = function (app) {

    app.get('/musica', function (req, res) {
        var mysqlConnection = app.config.dbConnection(route);

        mysqlConnection.query(`SELECT * FROM ${route}`, function (err, result) {
            res.send(result)
        })
    })
}