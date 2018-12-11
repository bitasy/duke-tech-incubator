var Insert = require("../models/insert");

exports.submitProject = function (req, res) {
    Insert.project(req.body, function(error){
        if(error){
            res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                detail: "If you haven't registered your account yet, do that first by clicking Create Profile!",
                status: error.sqlMessage})
        } else
            res.render("formsubmit", {title: "DTI"});
    })
};

exports.submitProfile = function (req, res) {
    Insert.profile(req.body, function(error){
        if(error){
            res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                detail: "Make sure all fields are filled out correctly!",
                status: error.sqlMessage})
        }
        res.render("profile", {title: "DTI"});
    })
};

exports.edit = function (req, res) {
    Insert.edit(req.body, function(error){
        if(error){
            res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                detail: "If you haven't registered your account yet, do that first by clicking Create Profile! " +
                    "Alternatively, if you have registered your account, make sure you're not already part of this project.",
                status: error.sqlMessage})
        } else {
            res.render("edit");
        }
    })
};

exports.joinProject = function (req, res){
    Insert.join(req.body, function(error) {
        if(error){
            res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                detail: "If you haven't registered your account yet, do that first by clicking Create Profile! " +
                    "Alternatively, if you have registered your account, make sure you're not already part of this project.",
                status: error.sqlMessage})
        } else {
            res.render("formsubmit", {title: "DTI"});
        }
    })
}

exports.add_project = function (req, res) {
    res.render("addproject", {title: "DTI"})
};

exports.placeOrder = function (req, res) {
    form = req.body;
    var ord1 = form.sel1;
    var ord2 = form.sel2;
    var ord3 = form.sel3;

    var q1 = form.q1;
    var q2 = form.q2;
    var q3 = form.q3;

    names = [];
    qs = [];

    if(ord1!==undefined && ord1.length > 0 && q1 > 0){
        names.push(ord1);
        qs.push(q1);
    }
    if(ord2!==undefined && ord2.length > 0 && q2 > 0){
        names.push(ord2);
        qs.push(q2);
    }
    if(ord3!==undefined && ord3.length > 0 && p3 > 0){
        names.push(ord3);
        qs.push(q3);
    }

    Insert.order(names, function(error, results) {
        if (error) {
            res.render("error", {
                title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                detail: "If you haven't registered your account yet, do that first by clicking Create Profile! " +
                    "Alternatively, if you have registered your account, make sure you're not already part of this project.",
                status: error.sqlMessage
            })
        } else {
            var oid = results[0][0]['oid'] + 1;
            results.shift();
            //once maxOID obtained, insert new order into project_order / order_detail



            Insert.orderInsert(oid, form, results, qs, function(error){
                if (error) {
                    res.render("error", {
                        title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                        detail: "If you haven't registered your account yet, do that first by clicking Create Profile! " +
                            "Alternatively, if you have registered your account, make sure you're not already part of this project.",
                        status: error.sqlMessage
                    })
                } else {
                    res.render("formsubmit", {title: "DTI"});
                }
            })
        }
    })
}
