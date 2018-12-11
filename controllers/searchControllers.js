var Project = require("../models/project");
var mysql = require("mysql");

exports.advanced_search = function(req, res){
    var criteria = {};

    if (req.body.name !== undefined && req.body.name.length > 0){
        criteria.name = req.body.name;
    }

    if (req.body.founder !== undefined && req.body.founder.length > 0){
        criteria.founder = req.body.founder;
    }

    if (req.body.professor !== undefined && req.body.professor.length > 0){
        criteria.professor = req.body.professor;
    }

    if (req.body.tags !== undefined && req.body.tags.length > 0){
        var tags = req.body.tags.split(",");
        for (var i = 0; i < tags.length; i++){
            tags[i] = tags[i].trim();
        }
        criteria.tags = tags;
    }

    if (req.body.status !== undefined && req.body.status.length > 0){
        criteria.status = req.body.status;
    }

    Project.search(criteria, function (projects) {
        res.render("query", {name: "Results", projects: projects});
    });

};