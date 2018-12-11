var mysql = require('mysql');
var run = require('./makeConnection').run;

exports.find = function (col, val, callback) {
    col = mysql.escapeId(col);
    val = mysql.escape(val);

    var query = `SELECT description, Person.name, status, pid FROM Project, Person
                 WHERE Project.name = ${val} AND Project.founder = Person.netid;
                 SELECT Person.name FROM Person, Project, Member
                 WHERE Project.name = ${val} AND Project.pid = Member.pid AND Member.netid = Person.netid;`
    var execute = function (error, results, fields) {
        if (error) throw error;
        var ret = [];
        console.log(results);
        console.log(results[1]);

        //string of members
        var mem = "";
        for (var i in results[1]){
            console.log("here, " + i);
            mem = mem + results[1][i].name + ", ";
            console.log(mem);
        }
        mem = mem.substr(0, mem.length-2);

        ret.push({"name": val, "description": results[0][0].description, "founder": results[0][0].name,
            "status": results[0][0].status, "pid": results[0][0].pid, "member": mem});
        callback(ret);
    };

    run(query, true, execute);
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
