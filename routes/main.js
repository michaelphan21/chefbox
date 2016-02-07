//var data = require('../data.json');
var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.get('/', function(req, res){
  res.render('main', { title: 'Chefbox', version: '0.0.1' });
});

http.listen(4200);

module.exports = router;
