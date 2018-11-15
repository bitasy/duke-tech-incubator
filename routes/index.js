var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var project_controller = require('../controllers/projectController');

/* GET home page. */
router.get('/', project_controller.all);

module.exports = router;
