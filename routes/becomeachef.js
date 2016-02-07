var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.get('/', function(req, res) {
  res.render('becomeachef');
});

module.exports = router;
