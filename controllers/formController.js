var Insert = require("../models/insert");

exports.submitProject = function (req, res) {
    Insert.project(req.body, function(error){
        if(error){
            res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                detail: "If you haven't registered your account yet, do that first by clicking Create Profile!",
                status: error.sqlMessage})
        } else
            res.render("formsubmit", {title: "DTI"});
    })
};

exports.submitProfile = function (req, res) {
    Insert.profile(req.body, function(){
        res.render("profile", {title: "DTI"});
    })
};

exports.edit = function (req, res) {
    Insert.edit(req.body, function(error){
        if(error){
            res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                detail: "If you haven't registered your account yet, do that first by clicking Create Profile! " +
                    "Alternatively, if you have registered your account, make sure you're not already part of this project.",
                status: error.sqlMessage})
        } else {
            res.render("edit");
        }
    })
};

exports.joinProject = function (req, res){
    Insert.join(req.body, function(error) {
        if(error){
            res.render("error", {title: "DTI ERROR", message: "Sorry! There's an error with your form.",
                detail: "If you haven't registered your account yet, do that first by clicking Create Profile! " +
                    "Alternatively, if you have registered your account, make sure you're not already part of this project.",
                status: error.sqlMessage})
        } else {
            res.render("formsubmit", {title: "DTI"});
        }
    })
}

exports.add_project = function (req, res) {
    res.render("addproject", {title: "DTI"})
};

