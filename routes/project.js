var express = require('express');
var router = express.Router();

var project_controller = require('../controllers/projectController');

router.get('/', function (req, res) {
    res.send("root of project")
});

router.get('/:name', project_controller.project_search("name"));

module.exports = router;