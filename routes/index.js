var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var project_controller = require('../controllers/projectController');
var search_controller = require('../controllers/searchControllers');

/* GET home page. */
router.get('/', project_controller.all);

router.get('/addproject', project_controller.add_project);

// render form page
router.get('/addprofile', function (req, res) {
    res.render("addprofile", {title: "DTI - Create Profile", add_profile: true})
});

router.get('/search', function (req, res){
    res.render("advancedSearch", {title: "DTI - Advanced Search"})
});

module.exports = router;
