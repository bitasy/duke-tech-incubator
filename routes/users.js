var express = require('express');
var router = express.Router();


var project_controller = require('../controllers/projectController');
var profile_controller = require('../controllers/profileController');


router.get('/', profile_controller.load_netid);

router.get('/:netid', profile_controller.load_netid);

module.exports = router;
