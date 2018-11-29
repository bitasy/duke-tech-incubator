var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var project_controller = require('../controllers/projectController');

/* GET home page. */
router.get('/', project_controller.all);

router.get('/addproject', project_controller.add_project);

module.exports = router;
