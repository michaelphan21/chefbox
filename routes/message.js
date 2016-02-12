var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.get('/', function(req, res) {
  res.render('message', { title: 'Chefbox', version: '0.0.1' });
});

module.exports = router;
