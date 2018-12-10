var mysql = require('mysql');

exports.project = function (form, callback) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dti',
        password : 'incubator',
        database : 'dti'
    });

    connection.connect();

    var founder = form.founder;
    founder = mysql.escape(founder);
    var name = form.name;
    name = mysql.escape(name);
    var desc = form.description;
    desc = mysql.escape(desc);

    console.log('one' + founder + name + desc);

    connection.query(`INSERT INTO Project(founder, name, status, description) VALUES (${founder}, ${name}, 'pending', ${desc})`,
        function (error, results, fields) {
            if (error) console.log(error);
            console.log('two' + founder + name + desc);
            callback();
        });

    connection.end();
};

exports.profile = function (form, callback) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dti',
        password : 'incubator',
        database : 'dti'
    });

    connection.connect();

    var netID = form.netid;
    netID = mysql.escape(netID);
    var name = form.name;
    name = mysql.escape(name);
    var email = form.email;
    email = mysql.escape(email);

    //TODO: Remove hardcoded student insert
    connection.query(`INSERT INTO Person(netid, name, email, role) VALUES (${netID}, ${name}, ${email}, 'Student')`,
        function (error, results, fields) {
            if (error) throw error;
            callback();
        });

    connection.end();
};