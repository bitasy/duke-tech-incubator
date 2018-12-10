var Project = require("../models/project");



exports.project_search = function (name) {
    return function(req, res) {
        Project.find(name, req.params.name, function (results) {
            res.render("query", {title: req.params.name + " Projects", founder: req.params.name, results: results});
        })
    }
};

exports.add_project = function (req, res) {
    res.render("addproject", {title: "DTI - Add Project", add_project: true})
};

exports.all = function (req, res) {
    Project.all(function (projects) {
        res.render("index", {title: "DTI", home: true, projects: projects})
    })
};
