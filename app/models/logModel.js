function Log(connection){
    this._connection = connection
}

Log.prototype.getLogs = function(callback){
    this._connection.query('SELECT * FROM LOG', callback);
}

Log.prototype.getLog = function(callback){
    this._connection.query('SELECT * FROM LOG ORDER BY ID DESC LIMIT 1', callback);
}

Log.prototype.postLog = function(valor, callback){
    this._connection.query(`INSERT INTO LOG SET ?`, valor, callback);
}

module.exports = function(){ 
    return Log;
}