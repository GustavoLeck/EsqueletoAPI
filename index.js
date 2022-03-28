const app = require("./config/server")

const api = require("./app/routes/api")(app)

const teste = require("./app/routes/teste")(app)

const log = require("./app/routes/log")(app)

const musica = require("./app/routes/musica")(app)


app.listen(3001, function(){
    console.log("Server ON")
})