var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var data = require('../data.json');

router.get('/', function(req, res) {
	var userdata = {
		"data": data,
		"username": req.query.username,
		"email": req.query.email
	};
	console.log(userdata["username"]);
	console.log(userdata["email"]);
  res.render('search', userdata);
});

module.exports = router;
