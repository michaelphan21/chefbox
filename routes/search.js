var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var data = require('../data.json');

router.get('/', function(req, res) {
	var userdata = {
		user: req.session.user,
		data: data,
		login: req.session.login
	};
  res.render('search', userdata);
});

module.exports = router;
