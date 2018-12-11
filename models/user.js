var mysql = require('mysql');
var run = require('./makeConnection').run;

exports.person = function (netid, callback) {
    netid = mysql.escape(netid);

    var query = `SELECT * FROM Person WHERE netid = ${netid}`;
    var execute = function (error, results, fields) {
        if (error) {
            console.log("here is an error");
            console.log(error);
        }
        console.log("here is results");
        console.log(results[0]);
        callback(error, results[0]);
    };


    run(query, false, execute);

};

exports.student = function (netid, callback){
    netid = mysql.escape(netid);

    var query = `
        SELECT * FROM Student WHERE netid = ${netid};
        SELECT * FROM Degree WHERE student = ${netid};
        SELECT * FROM Project WHERE pid IN (SELECT pid FROM Member WHERE netid = ${netid})`;

    var execute = function(error, results, fields){
        if (error) console.log(error);
        callback(error, results)
    };

    run(query, true, execute)
};

exports.professor = function (netid, callback){
    netid = mysql.escape(netid);

    var query = `
        SELECT * FROM Professor WHERE netid = ${netid};
        SELECT * FROM Specialization WHERE professor = ${netid};
        SELECT * FROM Project WHERE pid IN (SELECT pid FROM Mentorship WHERE professor = ${netid})`;

    var execute = function(error, results, fields){
        if (error) console.log(error);
        console.log("look here for results");
        console.log(results);
        callback(error, results)
    };

    run(query, true, execute)
};