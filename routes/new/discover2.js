var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var data = require('../../data.json');

router.get('/', function(req, res) {
  res.render('discover2', data);
});

module.exports = router;
