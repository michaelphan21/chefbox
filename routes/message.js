var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.get('/', function(req, res) {
	var data = {
		login: req.session.login
		,email: req.query.email
		,user: req.session.user
	};
  res.render('message', data);
});

module.exports = router;
