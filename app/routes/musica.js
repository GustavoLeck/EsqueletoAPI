module.exports = function (application) {

    application.get(`/musica`, function (req, res) {
        application.app.controllers.musica.musica(application, req, res)
    })

    application.get(`/musicas`, function (req, res) {
        application.app.controllers.musica.musicas(application, req, res)
    })

    application.get(`/addmusica`, function (req, res) {
        application.app.controllers.musica.addMusica(application, req, res)
    })

    
    application.post(`/musica/addmusica`, function (req, res) {  
        application.app.controllers.musica.salvarMusica(application, req, res)
        
    })
    


}


