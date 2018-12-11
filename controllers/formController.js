var Insert = require("../models/insert");

exports.submitProject = function (req, res) {
    Insert.project(req.body, function(){
        res.render("formsubmit");
    })
};

exports.submitProfile = function (req, res) {
    Insert.profile(req.body, function(){
        res.render("profile");
    })
};

exports.edit = function (req, res) {
    Insert.edit(req.body, function(){
        res.render("edit");
    })
};

exports.add_project = function (req, res) {
    res.render("addproject", {title: "DTI"})
};

