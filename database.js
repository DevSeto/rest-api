var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '1',
    database : 'nodetest',
    debug    :  true
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;