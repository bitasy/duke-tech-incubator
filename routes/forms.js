var express = require('express');
var router = express.Router();
var form_controller = require('../controllers/formController');

router.post('/project', form_controller.submit);

module.exports = router;