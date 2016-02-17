//var data = require('../data.json');
var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

//loads data of people.json into persons
var persons = require("../assets/data/people.json");

/*router.get('/', function(req,res){
    res.render('signup');
});*/


router.randfunction = function(req,res){
    console.log("work?");
    var newmember = {
        username: req.query.username,
        password: req.query.password,
        Address: req.query.add1 + req.query.add2
    }
    persons['members'].push(newmember);
    res.render('signup',persons);
};

module.exports = router;