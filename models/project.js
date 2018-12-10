var mysql = require('mysql');
var run = require('./makeConnection').run;

exports.find = function (col, val, callback) {
    col = mysql.escapeId(col);
    val = mysql.escape(val);

    var query = `SELECT name, description, founder, status, pid from Project where ${col} = ${val}`;
    var execute = function (error, results, fields) {
        if (error) throw error;
        var ret = [];
        for (var i in results){
            ret.push({"name": results[i].name, "description": results[i].description, "founder": results[i].founder, "status": results[i].status, "pid": results[i].pid});
        }

        callback(ret);
    };

    run(query, false, execute);
};

exports.all = function(callback){
    var query = `SELECT name, description from Project`;
    var execute = function (error, results, fields) {
        if (error) throw error;
        var ret = [];
        for (var i in results){
            ret.push({"name": results[i].name, "description": results[i].description});
        }

        callback(ret);
    };

    run(query, false, execute);
};