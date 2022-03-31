const route = "LOG "
module.exports = function (app) {

    app.get(`/log`, function (req, res) {
        var mysqlConnection = app.config.dbConnection(route);

        mysqlConnection.query(`SELECT * FROM ${route}`, function (err, result) {
            res.send(result)
        })
    })
}