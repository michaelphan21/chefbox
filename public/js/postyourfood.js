var PostModalController = {
	postInputFoodnameElementName: "#foodName",
	postInputQuantityElementName: "#quantity",
	postInputIngredientElementName: "#ingredient",
	postInputDescriptionElementName: "#description",
	postInputUpperPriceElementName: "#upperPrice",
	postInputLowerPriceElementName: "#lowerPrice",
	postInputCanvasElementName: "#camera-canvas",
	postInputVideoElementName: "#camera-video",
	postVideoDivElementName: "#video-div",
	postCanvasDivElementName: "#canvas-div",
	cameraBtnElementName: "#camera-button",
	startBtnElementName: "#start-button",
	stopBtnElementName: "#stop-button",
	postBtnElementName: "#postBtn",
	clearBtnElementName: "#clearBtn",
	postInputAvailableTimesElementName: "#availableTimes",
	postInputLatElementName: "#lat",
	postInputLngElementName: "#lng",

	postInputFoodname: null,
	postInputQuantity: null,
	postInputIngredient: null,
	postInputDescription: null,
	postInputUpperPrice: null,
	postInputLowerPrice: null,
	postInputCanvas: null,
	postInputVideo: null,
	postVideoDiv: null,
	postCanvasDiv: null,
	postInputAvailableTimes: null,
	postInputLat: null,
	postInputLng: null,

	startBtn: null,
	stopBtn: null,
	postBtn: null,
	clearBtn: null,
	cameraBtn: null,

	imageData: null,
	imageDataURL: null,

	clearFields: function() {
		var base = this;
		base.postInputFoodname.val("");
		base.postInputQuantity.val("");
		base.postInputIngredient.val("");
		base.postInputDescription.val("");
		base.postInputUpperPrice.val("");
		base.postInputLowerPrice.val("");
		base.postVideoDiv.hide();
		base.postInputLat.val("");
		base.postInputLng.val("");
		document.getElementById('camera-video').pause();
	},

	finishPost: function() {
		var base = this;
		base.clearFields();
		alert("Your food was posted!");
	},

	findElements: function() {
		var base = this;

		base.postInputFoodname = $(base.postInputFoodnameElementName);
		base.postInputQuantity = $(base.postInputQuantityElementName);
		base.postInputIngredient = $(base.postInputIngredientElementName);
		base.postInputDescription = $(base.postInputDescriptionElementName);
		base.postInputUpperPrice = $(base.postInputUpperPriceElementName);
		base.postInputLowerPrice = $(base.postInputLowerPriceElementName);
		base.postInputCanvas = $(base.postInputCanvasElementName);
		base.postInputVideo = $(base.postInputVideoElementName);
		base.postVideoDiv = $(base.postVideoDivElementName);
		base.postCanvasDiv = $(base.postCanvasDivElementName);
		base.postInputAvailableTimes = $(base.postInputAvailableTimesElementName);
		base.postInputLat = $(base.postInputLatElementName);
		base.postInputLng = $(base.postInputLngElementName);

		base.startBtn = $(base.startBtnElementName);
		base.stopBtn = $(base.stopBtnElementName);
		base.postBtn = $(base.postBtnElementName);
		base.clearBtn = $(base.clearBtnElementName);
		base.cameraBtn = $(base.cameraBtnElementName);
		base.cameraBtn.prop("disabled", true);

		return base;
	},

	addClickEvents: function() {
		var base = this;

		base.postBtn.on("click", function(e) {
			e.preventDefault();
			console.log('postBtn click');
			var postURL = '/postyourfood';
			var price = parseFloat(base.postInputUpperPrice.val());
			var lowerPrice = parseFloat(base.postInputLowerPrice.val());
			if (lowerPrice > 9) {
				lowerPrice = lowerPrice / 100;
			} else {
				lowerPrice = lowerPrice / 10;
			}
			price = price + lowerPrice;
			console.log('price: '+ price);
			var data = {
				foodName: base.postInputFoodname.val()
				,price: price
				,quantity: base.postInputQuantity.val()
				,ingredients: base.postInputIngredient.val()
				,description: base.postInputDescription.val()
				,imageURL: base.imageDataURL
				,latLng: {
					lat: base.postInputLat.val()
					,lng: base.postInputLng.val()
				}
			};
			
			$.ajax({
				type: "POST"
				,url: postURL
				,data: data
				,success: base.finishPost
				,async: true
			});
			
		});

		base.clearBtn.on("click", function(e) {
			e.preventDefault();
			base.clearFields();
		});

		base.startBtn.on("click", function(e) {
			e.preventDefault();
			base.startBtn.hide();
			base.stopBtn.show();
			base.postVideoDiv.show();
			base.capture(base.postInputVideo, base.postInputCanvas, base.cameraBtn);
			base.cameraBtn.prop("disabled", false);
		});

		base.stopBtn.on("click", function(e) {
			e.preventDefault();
			base.startBtn.show();
			base.stopBtn.hide();
			base.cameraBtn.prop("disabled", true);
			base.postVideoDiv.hide();
			document.getElementById('camera-video').pause();
		});

		return base;
	},

	capture: function(video, canvas, snapshotButton) {
		var base = this;
		//video.show();
	  //Adopted from https://dev.opera.com/articles/media-capture-in-mobile-browsers/
	  //Setup navigator for all versions of browsers.
	  navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
	              navigator.mozGetUserMedia || navigator.msGetUserMedia;
	  var ctx = canvas[0].getContext('2d');

	  var successCallback = function(mediaStream) {
	    //The success callback function. On user click of snapshot button,
	    //draw the image on the canvas.
	    video.attr('src', window.URL.createObjectURL(mediaStream));

	    snapshotButton.click(function(e) {
	      console.log("Taking photo");
				e.preventDefault();
	      //Calculate dimension of photo from the video element.
	      var width = video.width();
	      var height = video.height();
	      canvas.attr('width', width);
	      canvas.attr('height', height);
	      ctx.drawImage(video[0], 0, 0, width, height);
	      base.imageData = ctx.getImageData(0, 0, width, height).data;
	      base.imageDataURL = document.getElementById("camera-canvas").toDataURL("image/png");
	    });
	  };

	  var errorCallback = function() {
	    //The error callback function. If getUserMedia errored, print that
	    //we failed.
	    console.log('Capture failed');
	  };

	  //Register the success and error callbacks with getUserMedia.
	  navigator.getUserMedia({ 'video': true },
	      successCallback, errorCallback);
	},

	initialize: function() {
		var base = this;
		base.findElements().addClickEvents();
	}
};

var PostModalController = PostModalController || {};

$(document).ready(function() {
	PostModalController.initialize();
});