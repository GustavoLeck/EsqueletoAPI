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

module.exports.addLog = function(application, req, res){
    res.render('log/addlog') 
}

module.exports.salvarLog = function(application, req, res){
    req.assert('CODIGO', "Código é obrigatório!").notEmpty().len(1, 60)
    req.assert('BOT', "Bot é obrigatório!").notEmpty().len(1, 60)
    req.assert('NOME', "Nome é obrigatório!").notEmpty().len(1, 180)
    req.assert('AUTOR', "Autor é obrigatório!").notEmpty().len(1, 60)
    req.assert('DATE', "Data é obrigatório!").notEmpty().isDate({Format: 'YYYY-MM-DD'})
    req.assert('TIME', "Hora é obrigatório!").notEmpty()

    var error = req.validationErrors();

    if(error){
        res.redirect("/log", {error : result})
        return
    }

    var mysqlConnection = application.config.dbConnection();
    var musicaModel = new application.app.models.logModel(mysqlConnection);

    musicaModel.postLog(req.body, function(error, result){
        res.redirect("/log")
    })
}




