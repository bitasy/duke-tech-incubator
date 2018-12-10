var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var project_controller = require('../controllers/projectController');

/* GET home page. */
router.get('/', project_controller.all);

router.get('/addproject', project_controller.add_project);

// render form page
router.get('/addprofile', function (req, res) {
    res.render("addprofile", {title: "DTI - Create Profile", add_profile: true})
});


module.exports = router;
