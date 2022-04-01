module.exports = function (application) {

    application.get(`/logs`, function (req, res) {

        var mysqlConnection = application.config.dbConnection();
        var logModel = application.app.models.logModel;

        logModel.getLogs(mysqlConnection, function(error, result){
            res.render('log/logs', {log : result})
        })

       
    })
}