module.exports = function(){

    this.getLog = function(connection, callback){
        connection.query('SELECT * FROM LOG WHERE ID = 1', callback);
    }
    this.getLogs = function(connection, callback){
        connection.query('SELECT * FROM LOG', callback);
    }
    return this;

}