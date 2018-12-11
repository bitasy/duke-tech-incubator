var express = require('express');
var router = express.Router();


var project_controller = require('../controllers/projectController');
var profile_controller = require('../controllers/profileController');


router.post('/', profile_controller.load_netid);

router.post('/:netid', profile_controller.load_netid);

module.exports = router;
