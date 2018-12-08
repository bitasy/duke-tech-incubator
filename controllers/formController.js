var Form = require("../models/forms");

exports.submit = function (req, res) {
    Form.add(req.body, function(){
        res.render("formsubmit");
    })
};


exports.add_project = function (req, res) {
    res.render("addproject", {title: "DTI"})
};

