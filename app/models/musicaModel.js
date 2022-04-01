module.exports = function(){

    this.getMusicas = function(connection, callback){
        connection.query('SELECT * FROM MUSICA', callback);
    }
    this.getMusica = function(connection, callback){
        connection.query('SELECT * FROM MUSICA WHERE MUSICA = 1', callback);
    }
    return this;

}