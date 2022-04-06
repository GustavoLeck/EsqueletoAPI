module.exports = function (application) {

    application.get(`/log`, function (req, res) {
        application.app.controllers.log.log(application, req, res)
        
    })

    application.get(`/logs`, function (req, res) {
        application.app.controllers.log.logs(application, req, res)
    })

    application.get(`/addlog`, function (req, res) {
        application.app.controllers.log.addLog(application, req, res)
    })

    application.post(`/log/addlog`, function (req, res) {  
        application.app.controllers.log.salvarLog(application, req, res)
        
    })
}