var Profile = require("../models/insert");
var User = require("../models/user");

exports.submit = function (req, res) {
    Profile.add(req.body, function(){
        res.render("formsubmit");
    })
};


exports.add = function (req, res) {
    res.render("addproject")
};


exports.load_netid = function (req, res) {
    var netid = "netid" in req.params ? req.params.netid : req.body.netid;
    User.person(netid, function (error, info) {
        if(error || info==undefined){
            res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                detail: "If you haven't registered your account yet, do that first by clicking Create Profile!",
            })
        } else {
            if(info.role === "Student"){
                User.student(netid, function (error2, data) {
                    if(error2){
                        res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error.",
                            detail: "Make sure you are registered, and registered as a student!",
                            status: error2.sqlMessage})
                    }
                    res.render("studentProfile",
                        {title: "DTI - " + info.name, info: info, degrees: data[1], projects: data[2]})
                })
            } else if(info.role === "Professor"){
                User.professor(netid, function (error3, data) {
                    if(error3){
                        res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error.",
                            detail: "Make sure you are registered, and registered as a professor!",
                            status: error3.sqlMessage})
                    }
                    res.render("professorProfile",
                        {title: "DTI - " + info.name, info: info, specializations: data[1], projects: data[2]})
                })
            }
        }
    })
};