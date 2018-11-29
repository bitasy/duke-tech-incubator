var mysql = require('mysql');

exports.find = function (col, val, callback) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dti',
        password : 'incubator',
        database : 'dti'
    });

    connection.connect();

    connection.query(`SELECT name, description from Project where ${col} = '${val}'`, function (error, results, fields) {
        if (error) throw error;
        var ret = [];
        for (var i in results){
            ret.push({"name": results[i].name, "description": results[i].description});
        }

        callback(ret);

    });

    connection.end();
};

exports.all = function(callback){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dti',
        password : 'incubator',
        database : 'dti'
    });

    connection.connect();

    connection.query(`SELECT name, description from Project`, function (error, results, fields) {
        if (error) throw error;
        var ret = [];
        for (var i in results){
            ret.push({"name": results[i].name, "description": results[i].description});
        }

        callback(ret);

    });

    connection.end();
}