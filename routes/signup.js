/*'use strict';

$(document).ready(function() {
    initializePage();
});*/

var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
//loads data of people.json into persons
var persons = require("../assets/data/people.json");



/*not necessary until we figure out databases
var Mongoose = require('mongoose');*/


/*var BlogPostSchema = new Mongoose.Scheme({
    "username": String,
    "password": String,
    "cfrmpassword": String,
    "email": String
})*/


router.addMemtoPage = function(req,res){
    console.log("work?");
    var newmember = {
        username: req.query.username,
        password: req.query.password,
        email: req.query.email
    }
    var passmatch = req.query.cfrmpassword;
    if( passmatch != newmember.password){
        console.log("password no match");
    } else
    {
        console.log("what's going on?")
        persons['members'].push(newmember);
    }
    res.render('signup',persons);
};

module.exports = router;