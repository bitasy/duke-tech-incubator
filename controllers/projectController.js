var Project = require("../models/project");

exports.project_search = function (name) {
    return function(req, res) {
        Project.find(name, req.params.name, function (projects) {
            res.render("query", {title: req.params.name + " Projects", founder: projects[0].founder, projects: projects});
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

