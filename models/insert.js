var mysql = require('mysql');
var run = require('./makeConnection').run;

exports.project = function (form, callback) {
    var founder = form.founder;
    founder = mysql.escape(founder);
    var name = form.name;
    name = mysql.escape(name);
    var desc = form.description;
    desc = mysql.escape(desc);
    //trim in searchcontrollers
    //join('');


    var query = `INSERT INTO Project(founder, name, status, description) VALUES (${founder}, ${name}, 'pending', ${desc})`;
    var execute = function (error, results, fields) {
        if (error) console.log(error);
        callback(error, results.insertId);
    };

    run(query, true, execute);
};

exports.tags = function(tags, pid, callback){
    tag = tags.split(',');
    var str = '';
    console.log("here is tag array");
    console.log(tag);

    for (var t in tag){
        str = str + `INSERT INTO Tag(pid, tag) VALUES (${pid}, ${t});`;
        console.log("here is tag for " + t);
        console.log(str);
    }
    var query = str;

    var execute = function (error) {
        if (error) console.log(error);
        callback(error);
    };

    run(query, true, execute);
}
exports.profile = function (form, callback) {
    var netID = form.netid;
    netID = mysql.escape(netID);
    var name = form.name;
    name = mysql.escape(name);
    var email = form.email;
    email = mysql.escape(email);

    var query = `INSERT INTO Person(netid, name, email, role) VALUES (${netID}, ${name}, ${email}, 'Student')`;
    var execute = function (error) {
        if (error) console.log(error);
        callback(error);
    };

    run(query, false, execute);
};

exports.join = function (form, callback) {
    var netID = form.netID;
    netID = mysql.escape(netID);
    var pid = form.pid;

    var query = `INSERT IGNORE INTO Member(pid, netid) VALUES ${pid}, ${netID}`;
    var execute = function (error, results, fields) {
        if (error) console.log(error);
        callback(error);
    };

    run(query, false, execute);
};