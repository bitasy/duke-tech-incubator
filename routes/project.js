var express = require('express');
var router = express.Router();

var project_controller = require('../controllers/projectController');

router.get('/', function (req, res) {
    res.send("root of project")
});

router.get('/:netid', project_controller.projects_by);

module.exports = router;