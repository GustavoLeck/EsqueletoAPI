module.exports = function (application) {

    application.get(`/musicas`, function (req, res) {

        var mysqlConnection = application.config.dbConnection();
        var musicaModel = application.app.models.musicaModel;

        musicaModel.getMusicas(mysqlConnection, function(error, result){
            res.render('musica/musicas', {musica : result})
        })

       
    })
}