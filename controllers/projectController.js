var Project = require("../models/project");

exports.project_search = function (name) {
    return function (req, res) {
        Project.find(name, req.params.name, function (projects, members) {
            res.render("query", {
                title: req.params.name + " Projects",
                founder: orders.founder,
                projects: projects
            });
        })
    };
};

exports.project_search = function(req, res){
  Project.find(req.params.pid, function(error, project, orders, members){
      if(error){
          res.render("error", {title: "DTI - Error", message: "Sorry! We encountered an unexpected error.",
              detail: "Something went wrong while trying to find information about a project.",
              status: error.sqlMessage})
      } else {
          var grouped_orders = {};
          for(var i = 0; i < orders.length; i++){
              if (grouped_orders[orders[i].oid] === undefined){
                  grouped_orders[orders[i].oid] = [];
              }
              grouped_orders[orders[i].oid].push(orders[i]);
          }

          res.render("query", {
              title: "DTI - " + project.name,
              project: project,
              orders: grouped_orders,
              members: members
          });
      }
  })
};


exports.projects_by = function (req, res) {
    //res.send(req.params.netid);

    Project.find("name", req.params.name, function (orders, projects) {
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
    res.render("addproject", {title: "DTI - Add Project", add_project: true})
};

exports.all = function (req, res) {
    Project.all(function (projects) {
        res.render("index", {title: "DTI", home: true, projects: projects})
    })
};
