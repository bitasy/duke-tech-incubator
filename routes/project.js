var express = require('express');
var router = express.Router();

var project_controller = require('../controllers/projectController');
var search_controller = require('../controllers/searchControllers');

router.post("/", search_controller.advanced_search);

router.get('/:pid', project_controller.project_search);

module.exports = router;