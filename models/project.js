var mysql = require('mysql');

exports.find = function (col, val, callback) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dti',
        password : 'incubator',
        database : 'dti',
        // multipleStatements : true
    });

    connection.connect();

    connection.query(`SELECT name, description, founder, status, pid, oid, date, product_id, product_name, quantity, price from Project NATURAL JOIN Project_Order NATURAL JOIN Order_Item where ${col} = '${val}'`, function (error, results, fields){
            if (error) throw error;
            var ret = [];
            for (var i in results){
                ret.push({"name": results[i].name, "description": results[i].description, "founder": results[i].founder, "status": results[i].status,
                    "pid": results[i].pid, "oid": results[i].oid, "date": results[i].date, "product_id": results[i].product_id,
                    "product_name": results[i].product_name, "quantity": results[i].quantity, "price": results[i].price});
            }
            // can either do what i'm currently doing and do a comparison within the for loop, do a second query for the order by passing in the pid into the
            // for loop, or just do a natural join with project and order and have one query

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