module.exports = function (application) {

    application.get(`/log`, function (req, res) {

        var mysqlConnection = application.config.dbConnection();
        var logModel = application.app.models.logModel;

        logModel.getLog(mysqlConnection, function(error, result){
            res.render('log/log', {log : result})

            //res.send(result)
        })

       
    })
}