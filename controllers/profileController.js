var Profile = require("../models/insert");

exports.submit = function (req, res) {
    Profile.add(req.body, function(){
        res.render("formsubmit");
    })
};


exports.add = function (req, res) {
    res.render("addproject")
};
