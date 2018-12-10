var mysql = require('mysql');

function makeConnection(query, multiple, callback){

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

exports.person = function (netid, callback) {
    netid = mysql.escape(netid);

    var query = `SELECT * FROM Person WHERE netid = ${netid}`;
    var execute = function (error, results, fields) {
        if (error) throw error;
        callback(results[0]);
    };


    makeConnection(query, false, execute);

};

exports.student = function (netid, callback){
    netid = mysql.escape(netid);

    var query = `
        SELECT * FROM Student WHERE netid = ${netid};
        SELECT * FROM Degree WHERE student = ${netid};
        SELECT * FROM Project WHERE pid IN (SELECT pid FROM Member WHERE netid = ${netid})`;

    var execute = function(error, results, fields){
        if (error) throw error;
        callback(results)
    }

    makeConnection(query, true, execute)
};

exports.professor = function (netid, callback){
    netid = mysql.escape(netid);

    var query = `
        SELECT * FROM Professor WHERE netid = ${netid};
        SELECT * FROM Specialization WHERE professor = ${netid};
        SELECT * FROM Project WHERE pid IN (SELECT pid FROM Mentorship WHERE professor = ${netid})`;

    var execute = function(error, results, fields){
        if (error) throw error;
        callback(results)
    }

    makeConnection(query, true, execute)
};