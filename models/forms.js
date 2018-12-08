var mysql = require('mysql');

exports.add = function (form, callback) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dti',
        password : 'incubator',
        database : 'dti'
    });

    connection.connect();

    var founder = form.founder;
    var name = form.name;
    var desc = form.description;

    connection.query(`INSERT INTO Project(founder, name, status, description) VALUES ('${founder}', '${name}', 'pending', '${desc}')`,
        function (error, results, fields) {
            if (error) throw error;
            callback();
    });

    connection.end();
};
