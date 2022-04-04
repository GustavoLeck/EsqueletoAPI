module.exports.log = function(application, req, res){
    var mysqlConnection = application.config.dbConnection();
    var logModel = new application.app.models.logModel(mysqlConnection);

    logModel.getLog(function(error, result){
        res.render('log/log', {log : result})
    }) 
}

module.exports.logs = function(application,  req, res){
    var mysqlConnection = application.config.dbConnection();
    var logModel = new application.app.models.logModel(mysqlConnection);
    
    logModel.getLogs(function(error, result){
        res.render('log/logs', {log : result})
    })
}

