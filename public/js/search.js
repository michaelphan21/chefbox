'use strict';

$(document).ready(function() {
	console.log("$(document).read()");
	initializePage();
});

function initializePage() {
	console.log("initializePage()");
	$('#moreBtn').click(function() {
		console.log("moreBtn clicked");
	});
	$('.col-md-3.portfolio-item button:nth-child(1)').click(function() {
		console.log("loadFoodItem()");
		console.log(".col-md-3.portfolio-item button length:" + $('.col-md-3.portfolio-item button').children().length);

		var foodID = $(this).closest('.col-md-3.portfolio-item').attr('id');
		console.log("foodID:" + foodID);
		var foodInfoURL = "/searchID?id=" + foodID;
		$.get(foodInfoURL, function(data) {
			document.location.href = "foodinfo?idx=" + data;
		});
	});
	$('.col-md-3.portfolio-item table table tbody button:nth-child(1)').click(function() {
		var foodID = $(this).closest('.col-md-3.portfolio-item').attr('id');
		console.log("foodID:" + foodID);
		var foodInfoURL = "/searchID?id=" + foodID;
		$.get(foodInfoURL, function(data) {
			document.location.href = "foodinfo?idx=" + data;
		});
	});
	$('.col-md-3.portfolio-item table table tbody button:nth-child(2)').click(function() {
		console.log("order now button clicked length:" + $('.col-md-3.portfolio-item button'.children().length()));
	});	
}