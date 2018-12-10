var mysql = require('mysql');

var show = function (table, netid, callback) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dti',
        password : 'incubator',
        database : 'dti'
    });

    connection.connect();

    netid = mysql.escape(netid);

    connection.query(`SELECT * FROM ${table} WHERE netid = ${netid}`,
        function (error, results, fields) {
            if (error) throw error;
            callback(results[0]);
        });

    connection.end();
};

exports.person = show.bind(undefined, "Person");

exports.student = show.bind(undefined, "Student");

exports.professor = show.bind(undefined, "Professor");