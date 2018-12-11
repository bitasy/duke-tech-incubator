var Project = require("../models/project");

exports.projects_by = function (req, res) {
    //res.send(req.params.netid);

    Project.find("name", req.params.name, function (results) {
       projects = {};
       for (var i = 0; i < results.length; i++){
           if (projects[results[i].pid] === undefined){
               projects[results[i].pid] = [];
           }
           projects[results[i].pid].push(results[i]);
       }

       oids = {};

       for(var result in projects){
           var all = projects[result];
           for (var j = 0; i < all.length; j++){
               if (oids[all[j].oid] === undefined){
                   oids[all[j].oid] = [];
               }
               oids[all[j].oid].push(all[j]);
           }
           projects[result] = oids;
           oids = {};
       }
       console.log(projects)
        res.render("query", {title: req.params.name + " Projects", founder: req.params.name, results: projects});
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
