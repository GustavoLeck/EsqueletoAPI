module.exports.musica = function(application, req, res){
    var mysqlConnection = application.config.dbConnection();
    var musicaModel = new application.app.models.musicaModel(mysqlConnection);

    musicaModel.getMusica(function(error, result){
        res.render('musica/musica', {musica : result})
    })
}

module.exports.musicas = function(application, req, res){
    var mysqlConnection = application.config.dbConnection();
    var musicaModel = new application.app.models.musicaModel(mysqlConnection);

    musicaModel.getMusicas(function(error, result){
        res.render('musica/musicas', {musica : result})
        //res.send(result)
    })
}

module.exports.addMusica = function(application, req, res){
    res.render('musica/addmusica') 
}

module.exports.salvarMusica = function(application, req, res){
    req.assert('CODIGO', "Código é obrigatório!").notEmpty().len(1, 60)
    req.assert('BOT', "Bot é obrigatório!").notEmpty().len(1, 60)
    req.assert('CANAL_DE_VOZ', "Canal de voz é obrigatório!").notEmpty().len(1, 60)
    req.assert('NOME', "Nome é obrigatório!").notEmpty().len(1, 180)
    req.assert('CANAL', "Canal é obrigatório!").notEmpty().len(1, 60)
    req.assert('DURACAO', "Duracao é obrigatório!").notEmpty().len(1, 12)
    req.assert('VISUALIZACAO', "Visualização é obrigatório!").notEmpty().len(1, 12)
    req.assert('LINK').notEmpty().len(1, 120)
    req.assert('DATE', "Data é obrigatório!").notEmpty().isDate({Format: 'YYYY-MM-DD'})
    req.assert('TIME', "Hora é obrigatório!").notEmpty()

    var error = req.validationErrors();

    if(error){
        res.redirect("/musica", {error : result})
        return
    }

    var mysqlConnection = application.config.dbConnection();
    var musicaModel = new application.app.models.musicaModel(mysqlConnection);

    musicaModel.postMusica(req.body, function(error, result){
        res.redirect("/musica")

    })

}