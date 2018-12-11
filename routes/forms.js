var express = require('express');
var router = express.Router();

var form_controller = require('../controllers/formController');

router.post('/project', form_controller.submitProject);

router.post('/edit', form_controller.edit);

router.post('/profile', form_controller.submitProfile);

router.post('/join', form_controller.joinProject);
module.exports = router;