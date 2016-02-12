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
	$('.col-md-3 .btn-default').click(function() {
		console.log('default button clicked');
		var foodID = $(this).closest('.col-md-3.portfolio-item').attr('id');
		var foodInfoURL = "/searchID?id=" + foodID;
		$.get(foodInfoURL, function(data) {
			document.location.href = "foodinfo?idx=" + data;
		});
	});
	$('.col-md-3 .btn-primary').click(function() {
		console.log('primary button clicked');
		var divcontainer = $('#container');
		var keywordsearch = $('#keyword-search');
		keywordsearch.css("backgroundColor", "rgba(0,0,0,0.01)");
		keywordsearch.css("border-color", "rgba(0,0,0,0.01)")
		keywordsearch.attr('disabled', 'disabled');
		divcontainer = divcontainer.prepend('<div id="orderviewbground" style="position:absolute; top: -20px; left: 0; right: 0; bottom: 0; z-index: 2; background-color:rgba(0, 0, 0, 0.4);"></div>');
		var foodID = $(this).closest('.col-md-3.portfolio-item').attr('id');
		var foodInfoURL = "/searchData?id=" + foodID;
		$.get(foodInfoURL, function(data) {
			//divcontainer = divcontainer.appendTo('<div id="orderview" style="position: absolute; top: -20px; left: 0; right: 0; bottom: 0; z-index: 100;"></div>');
			var html = '<div class="container" style="padding: 0px; margin: 0px; background-color: #000; color: #fff"><p>' + data.price + '</p>';
			html += '<table><thead><tr><th>Need by</th><th>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>How much portion?</th></tr></thead><tbody><tr><td><input id="keyword-search" type="text" class="form-control"  placeholder="mm/dd/yyyy" style="text-align: center;"/></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><input id="keyword-search" type="text" class="form-control"  placeholder="1 person&apos;s" style="text-align: center;"/></td></tr></tbody></table>';
			html += '<br><button type="button" class="btn btn-primary">Request to Order</button></div>';
			html += '<p></p>';
			divcontainer = $(html).prependTo(divcontainer);
		});
	});	
}