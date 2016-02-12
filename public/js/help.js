'use strict';

$(document).ready(function() {
	console.log("document ready");
	initializePage();
});

function initializePage() {
	console.log("initializePage");
	$('#help1').click(function (e) {
		e.preventDefault();
		console.log('help1 clicked');
		var htmlTxt = '<h1>&nbsp;Getting Started</h1>'
		htmlTxt += '&nbsp;Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		htmlTxt += '<br><br>';
		htmlTxt += '&nbsp;Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		$('#summary').html(htmlTxt);
	});
	$('#help2').click(function (e) {
		e.preventDefault();
		var htmlTxt = '<h1>&nbsp;Account and Profile</h1>'
		htmlTxt += '&nbsp;Fusce lobortis quis rutrum sapien sollicitudilobortis mauris. Nam idquis rutrum sapien sollicitudimagna. In hac habitaquis rutrum sapien sollicitudimst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		htmlTxt += '<br><br>';
		htmlTxt += '&nbsp;quis rutrum sapien sollicitudirutrum sapien sollicitudin. Nam felis. pien sollicitudirutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		$('#summary').html(htmlTxt);

	});
	$('#help3').click(function (e) {
		e.preventDefault();
		var htmlTxt = '<h1>&nbsp;How to Become a Chef</h1>'
		htmlTxt += '&nbsp;pien sollicitudirutrum sapien sollicitudin. Nam felisdin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		htmlTxt += '<br><br>';
		htmlTxt += '&nbsp;Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hFusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		$('#summary').html(htmlTxt);

	});
	$('#help4').click(function (e) {
		e.preventDefault();
		var htmlTxt = '<h1>&nbsp;Reviews</h1>'
		htmlTxt += '&nbsp;Cras eget est fermentum, cursus ligula ut, tristique ligula. sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		htmlTxt += '<br><br>';
		htmlTxt += '&nbsp;F ut, tristique ligula. usce lobortis arcu eu diam ullamcorper, quis rutrum sapien solCras eget est fermentum, cursus ligula ut, tristique ligula. n. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		$('#summary').html(htmlTxt);

	});
	$('#help5').click(function (e) {
		e.preventDefault();
		var htmlTxt = '<h1>&nbsp;Policies</h1>'
		htmlTxt += '&nbsp;Fefficitur sed leo id, consequ usce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		htmlTxt += '<br><br>';
		htmlTxt += '&nbsp;Fusce loboefficitur sed leo id, consequ efficitur sed leo id, consequrtis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		$('#summary').html(htmlTxt);

	});
	$('#help6').click(function (e) {
		e.preventDefault();
		var htmlTxt = '<h1>&nbsp;FAQ</h1>'
		htmlTxt += '&nbsp;Lobortis arcu eu diam  Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		htmlTxt += '<br><br>';
		htmlTxt += '&nbsp;Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		$('#summary').html(htmlTxt);

	});
	$('#help7').click(function (e) {
		e.preventDefault();
		var htmlTxt = '<h1>&nbsp;Contact Us</h1>'
		htmlTxt += '&nbsp;Quis lobortis arcu eu diam  lobortis arcu eu diam eu rutrum sapien sollicitudin. Nam flobortis arcu eu diam  lobortis arcu eu diam v lobortis arcu eu diam  elis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		htmlTxt += '<br><br>';
		htmlTxt += '&nbsp;Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.';
		$('#summary').html(htmlTxt);

	});
}