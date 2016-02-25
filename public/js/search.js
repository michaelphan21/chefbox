'use strict';

var available_time_confirm = '';

$(document).ready(function() {
	console.log("$(document).read()");
	initializePage();
});

function initializePage() {
	console.log("initializePage()");
	$('#moreBtn').click(function(e) {
		e.preventDefault();
		console.log("moreBtn clicked");
	});

	$('.btn-default-order').click(function() {
		console.log(".btn-default-order clicked");
		var foodID = $(this).closest('.col-md-3.portfolio-item').attr('id');
		console.log("foodID:" + foodID);
		var foodInfoURL = "/searchID?id=" + foodID;
		$.get(foodInfoURL, function(data) {
			document.location.href = "/foodinfo?idx=" + data;
		});
	});

	$('.btn-default-select').click(function() {
		console.log('time schedule select btn clicked');
		var available_times_table_body = $(this).parent().parent().parent();
		var len = available_times_table_body.children().length;
		for (var i = 0; i < len; ++i) {
			available_times_table_body.children(':nth-child('+i+')').children(':first-child').css("font-weight", "normal");
		}
		var available_time = $(this).parent().parent().children(':first-child');
		available_time.css("font-weight", "Bold");
		available_time_confirm = available_time.text();
	});

	$('#confirm-btn').click(function() {
		console.log('#checkout-btn clicked');
		if (available_time_confirm == '') {
			alert("Please select a time that you'd like to pick up the food");
		} else {
			alert("Great! Your order has been successfully placed for "+available_time_confirm+" and we will inform you on the day you pick it up.")
			document.location.href = "/search";
		}
	});

	$('#message-btn').click(function() {
		console.log('#message-btn clicked');
		var foodID = $(this).closest('.col-md-3.portfolio-item').attr('id');
		document.location.href = "/message?chef-username=" + foodID;
	});
	
	/*
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
	*/
}