var mysql = require('mysql');
var run = require('./makeConnection').run;

/*exports.find = function (col, val, callback) {
    col = mysql.escapeId(col);
    val = mysql.escape(val);

    var query =  `SELECT name, description, founder, status, pid, oid, date, product_id, product_name, quantity, price 
                  from Project NATURAL JOIN Project_Order NATURAL JOIN Order_Item where ${col} = '${val}';
                  SELECT description, Person.name, status, pid FROM Project, Person
                  WHERE Project.name = ${val} AND Project.founder = Person.netid;
                  SELECT Person.name, Project.pid FROM Person, Project, Member
                  WHERE Project.name = ${val} AND Project.pid = Member.pid AND Member.netid = Person.netid;`
    var execute = function (error, results, fields) {
        if (error) throw error;
        var ret = [];
        for (var i in results[0]){
            ret.push({"name": results[0][i].name, "description": results[0][i].description, "founder": results[0][i].founder, "status": results[0][i].status,
                "pid": results[0][i].pid, "oid": results[0][i].oid, "date": results[0][i].date, "product_id": results[0][i].product_id,
                "product_name": results[0][i].product_name, "quantity": results[0][i].quantity, "price": results[0][i].price});
        }

        var ret2 = [];
        //string of members
        var mem = "";
        for (var i in results[2]){
            mem = mem + results[2][i].name + ", ";
        }
        mem = mem.substr(0, mem.length-2);

        ret2.push({"name": val, "description": results[1][0].description, "founder": results[1][0].name,
            "status": results[1][0].status, "pid": results[1][0].pid, "member": mem});
        callback(ret, ret2);
    };

    run(query, true, execute);
};*/



exports.find = function(pid, callback){
    pid = mysql.escape(pid);
    var query = `SELECT * FROM Project WHERE pid = ${pid};
                 SELECT * FROM Order_Detail, Product WHERE 
                      Order_Detail.product_id = Product.product_id 
                      AND pid = ${pid};
                 SELECT Person.name FROM Person, Member WHERE pid = ${pid} AND Person.netid = Member.netid;`;
    var execute = function(error, results, fields){
        if (error) console.log(error);
        callback(error, results[0][0], results[1], results[2]);

    };

    run(query, true, execute)

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
    var query = `SELECT name, description, pid from Project`;
    var execute = function (error, results, fields) {
        if (error) throw error;
        var ret = [];
        for (var i in results){
            ret.push({"name": results[i].name, "description": results[i].description, "pid": results[i].pid});
        }

        callback(ret);
    };

    run(query, false, execute);
};
