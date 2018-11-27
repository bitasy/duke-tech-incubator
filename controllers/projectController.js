var Project = require("../models/project");

exports.projects_by = function (req, res) {
    //res.send(req.params.netid);

    Project.find("founder", req.params.netid, function (results) {
        res.render("query", {title: req.params.netid + " Projects", founder: req.params.netid, results: results});
    })
};

exports.add_project = function (req, res) {
    res.render("addproject", {title: "DTI"})
};

exports.all = function (req, res) {
    Project.all(function (projects) {
        res.render("index", {title: "DTI", projects: projects})
    })
};
