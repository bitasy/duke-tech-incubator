var mysql = require('mysql');
var run = require('./makeConnection').run;

exports.project = function (form, callback) {
    var founder = form.founder;
    founder = mysql.escape(founder);
    var name = form.name;
    name = mysql.escape(name);
    var desc = form.description;
    desc = mysql.escape(desc);

    var query = `INSERT INTO Project(founder, name, status, description) VALUES (${founder}, ${name}, 'pending', ${desc})`;
    var execute = function (error, results, fields) {
        if (error) console.log(error);
        callback(error);
    };

    run(query, false, execute);
};

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

exports.edit = function (form, callback) {
    var which = form.which;
    var newText = form.newText;
    newText = mysql.escape(newText);
    var pid = form.pid;
    pid = mysql.escape(pid);


    if (which !== undefined && which === 'Name'){
        which = mysql.escape(which);
        console.log("ENTERING THE IF STATEMENT");
        var query = `UPDATE Project SET name = ${newText} WHERE pid = ${pid}`;
        console.log("PRINTING THE QUERY NOW");
        console.log(query);
    }
    else if (which !== undefined && which === 'Description'){
        which = mysql.escape(which);
        var query = `UPDATE Project SET description = ${newText} WHERE pid = ${pid}`;
    }

    var execute = function (error, results, fields) {
        if (error) console.log(error);
        callback(error);
    };

    run(query, false, execute);
};

function lookup(order){
    if(order == "Apple Developer Kit")
        return 150;
    else if(order == "GitHub Developer Pack")
        return 100;
    else
        return 0;
};

exports.order = function (form, callback) {
    //parse orders from form
    var ord1 = form.sel1;
    ord1 = mysql.escape(ord1);
    var ord2 = form.sel2;
    ord2 = mysql.escape(ord2);
    var ord3 = form.sel3;
    ord3 = mysql.escape(ord3);

    //query to set unique OID
    var query = `SELECT MAX(oid) FROM Order_Detail;`;

    //insert queries for when orders exist
    if(ord1!==null){
        query = query + `SELECT product_id, price FROM Product WHERE name=${ord1};`
    }
    if(ord2!==null){
        query = query + `SELECT product_id, price FROM Product WHERE name=${ord2};`;
    }
    if(ord3!==null){
        query = query + `SELECT product_id, price FROM Product WHERE name=${ord3};`;
    }

    console.log("query is");
    console.log(query);

    var execute = function (error, results, fields) {
        console.log("results are");
        console.log(results);
        if (error) console.log(error);

        //this is my point of confusion: we need to insert up to results 1,2,3, but all could be optional - how to make params optional?
        callback(error, results[0], results[1]);
    };

    run(query, true, execute);
};

exports.orderInsert = function(oid, prices, form, callback){
    var pid = form.pid;
    pid = mysql.escape(pid);
    var date = form.date;

    var ord1 = form.sel1;
    ord1 = mysql.escape(ord1);
    var q1 = form.q1;
    q1 = mysql.escape(q1);

    var ord2 = form.sel2;
    ord2 = mysql.escape(ord2);
    var q2 = form.q2;
    q2 = mysql.escape(q2);

    var ord3 = form.sel3;
    ord3 = mysql.escape(ord3);
    var q3 = form.q3;
    q3 = mysql.escape(q3);

    var arr = [{"ord": ord1,"q": q1}, {"ord": ord2, "q": q2}, {"ord": ord3, "q": q3}]
    for (item = 0; item < arr.length; item++){
        if(arr[0][item] !== NULL){
            query = query + `INSERT INTO Order_Detail(oid, pid, quantity)
            VALUES (oid, ${pid}, arr[item].q))`;

            query = query + `INSERT INTO Project_Order(pid, oid, date, total)
            VALUES (${pid}, oid, ${date}, ototal)`;
            console.log("this is query");
            console.log(query);
        }
    }
};