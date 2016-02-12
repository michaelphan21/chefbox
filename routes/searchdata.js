var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var data = require('../data.json');

router.sendInfo = function(req, res) {
	var foodID = req.query.id;
	var foodIdx = 0;
	var len = data.fooditems.length;
	for (i = 0; i < len; ++i) {
		//console.log("data.fooditems[i].id:" + data.fooditems[i].id);
		if (foodID == data.fooditems[i].id) {
			foodIdx = i;
		}
	}
	//console.log(foodIdx);
	res.json(foodIdx);
}

module.exports = router;
