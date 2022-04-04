module.exports = function (application) {

    application.get(`/musica`, function (req, res) {
        var mysqlConnection = application.config.dbConnection();
        var musicaModel = new application.app.models.musicaModel(mysqlConnection);

        musicaModel.getMusica(function(error, result){
            res.render('musica/musica', {musica : result})
        })
    })

    application.get(`/musicas`, function (req, res) {
        var mysqlConnection = application.config.dbConnection();
        var musicaModel = new application.app.models.musicaModel(mysqlConnection);

        musicaModel.getMusicas(function(error, result){
            res.render('musica/musicas', {musica : result})
            //res.send(result)
        })
    })

    application.get(`/addmusica`, function (req, res) {
        res.render('musica/addmusica')  
})
    
    application.post(`/musica/addmusica`, function (req, res) {  
        var mysqlConnection = application.config.dbConnection();
        var musicaModel = new application.app.models.musicaModel(mysqlConnection);

        musicaModel.postMusica(req.body, function(error, result){
          res.redirect("/musicas")

        }) 
    })
    


}

