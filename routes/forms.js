var express = require('express');
var router = express.Router();

// router.post('/project', function (req, res) {
//     var name = req.body.username;
//     console.log(name);
//     res.render("formsubmit");
// });
//
// router.get('/', function (req, res){
//     res.send("in post");
// })

var form_controller = require('../controllers/formController');

router.post('/project', form_controller.submitProject);

router.post('/profile', form_controller.submitProfile);
module.exports = router;