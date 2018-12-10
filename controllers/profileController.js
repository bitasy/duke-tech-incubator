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
    User.person(netid, function (info) {
        console.log(info);

        if(info.role === "Student"){
            User.student(netid, function (data) {
                res.render("studentProfile",
                    {title: "DTI - " + info.name, info: info, degrees: data[1], projects: data[2]})
            })
        } else if(info.role === "Professor"){
            User.professor(netid, function (data) {
                res.render("professorProfile",
                    {title: "DTI - " + info.name, info: info, specializations: data[1], projects: data[2]})
            })
        }
    })
};