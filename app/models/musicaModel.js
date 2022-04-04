function Musica(connection){
    this._connection = connection

}

Musica.prototype.getMusicas = function(callback){
    this._connection.query('SELECT * FROM MUSICA', callback);
}

Musica.prototype.getMusica = function(callback){
    this._connection.query('SELECT * FROM MUSICA WHERE ID = 1', callback);
}

Musica.prototype.postMusica = function(valor, callback){
    this._connection.query(`INSERT INTO MUSICA SET ?`, valor, callback);
}

module.exports = function(){ 
    return Musica;
}