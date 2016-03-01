var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.get('/', function(req, res) {
	var userdata = {
		user: req.session.user,
		login: req.session.login
	};
  res.render('contactus', userdata);
});

module.exports = router;
