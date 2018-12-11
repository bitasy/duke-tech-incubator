var mysql = require('mysql');

exports.run = function (query, multiple, callback){

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dti',
        password : 'incubator',
        database : 'dti',
        multipleStatements: multiple
    });

    connection.connect();

    connection.query(query, callback);

    connection.end();
}