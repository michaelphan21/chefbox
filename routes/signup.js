//var data = require('../data.json');
var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.get('/', function(req, res){
  res.render('signup');
});

module.exports = router;
