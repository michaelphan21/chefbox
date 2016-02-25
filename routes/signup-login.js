var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.get('/', function(req, res) {
	console.log("/signup-login");
	if (req.query.login == "true") {
		console.log("/login");		
		res.render('signup-login', {"login": true});
	} else {
		console.log("/signup");
	    res.render('signup-login', {"login": false});		
	}
});

module.exports = router;