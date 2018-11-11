var Project = require("../models/project");

exports.projects_by = function (req, res) {
    //res.send(req.params.netid);

    Project.find("founder", req.params.netid, function (results) {
        res.render("query", {founder: req.params.netid, results: results});
    })

};