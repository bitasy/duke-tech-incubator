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

exports.search = function(criteria, callback){

    var conditions = [];

    for (var field in criteria){
        var value = field === 'tags' ? criteria[field] : mysql.escape("%" + criteria[field] + "%");
        switch(field){
            case "name":
                conditions.push(`Project.name LIKE ${value}`);
                break;
            case "founder":
                conditions.push(`Project.founder LIKE ${value}`);
                break;
            case "professor":
                conditions.push(`EXISTS (SELECT * FROM Mentorship, Person WHERE
                                Project.pid = Mentorship.pid AND
                                Mentorship.professor = Person.netid AND
                                Person.name LIKE ${value})`);
                break;
            case "tags":
                var likes = [];
                for(var tag = 0; tag < value.length; tag++){
                    likes.push(`Tag.tag LIKE ${mysql.escape("%" + value[tag] + "%")}`);
                }

                likes = likes.join(` OR `) + `))`;

                conditions.push(`EXISTS (SELECT * FROM Tag WHERE
                                    Project.pid = Tag.pid AND (` + likes);
                break;
            case "status":
                conditions.push(`Project.status LIKE ${value}`);
                break;
        }


    }

    conditions = conditions.join(` AND `);

    var query = `SELECT * FROM Project WHERE ${conditions}`;
    var execute = function(error, results, fields){
        if (error) throw error;
        callback(results);
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