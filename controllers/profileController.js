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
            // load data from student and project table
        } else if(info.role === "Professor"){
            // load data from professor, mentorship, and project table
        }

        res.render('userprofile', {title: "DTI - " + info.netid})//+ results['name'], info: info})
    })
};