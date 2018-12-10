var express = require('express');
var router = express.Router();

var project_controller = require('../controllers/projectController');

router.get('/:name', project_controller.project_search("founder"));

module.exports = router;
