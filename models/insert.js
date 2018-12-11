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
        callback(error, results);
    };

    run(query, false, execute);
};

exports.tag = function(pid, tags, callback){
    tags = tags.split(",");

    var query = ``;
    for (var t = 0; t < tags.length; t++){
        var tag = mysql.escape(tags[t].trim());
        query += `INSERT INTO Tag(pid, tag) VALUES (${pid}, ${tag});`;
    }

    var execute = function(error, results, fields){
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

    console.log(netID.length);

    if ((netID.length>2) && (name.length>2) && (email.length>2)) {
        var query = `INSERT INTO Person(netid, name, email, role) VALUES (${netID}, ${name}, ${email}, 'Student')`;
        var execute = function (error) {
            if (error) console.log(error);
            callback(error);
        };

        run(query, false, execute);
    }
    else {
        //alert("Cannot submit empty netID, name, or email");
        callback(error);
    }
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

exports.order = function (products, callback) {
    //query to set unique OID
    var query = `SELECT MAX(oid) AS oid FROM Order_Detail;`;

    //insert queries for when orders exist
    for(var i = 0; i < products.length; i++)
        query = query + `SELECT product_id, price FROM Product WHERE name=${mysql.escape(products[i])};`

    var execute = function (error, results, fields) {
        console.log("results are");
        console.log(results);
        if (error) console.log(error);

        callback(error, results);
    };

    run(query, true, execute);
};

exports.orderInsert = function(oid, form, products, quantites, callback){
    // insert order, pid, date into project order
    // insert order, pid, products, quantity into detail

    var total = 0;
    for (var p = 0; p < products.length; p++){
        total += products[p][0]['price'] * quantites[p];
    }

    var pid = form.pid;
    pid = mysql.escape(pid);

    var date = form.date;
    date = mysql.escape(date);

    var query = `INSERT INTO Project_Order(pid, oid, date, total)
            VALUES (${pid}, ${oid}, ${date}, ${total});`;

    for (var prod = 0; prod < products.length; prod++){
        query = query + `INSERT INTO Order_Detail(oid, pid, product_id, quantity)
            VALUES (${oid}, ${pid}, ${products[prod][0]['product_id']}, ${quantites[prod]});`;
    }

    console.log(query);
    var execute = function (error, results, fields){
        if(error) console.log(error);
        callback(error);
    };

    run(query, true, execute);
};