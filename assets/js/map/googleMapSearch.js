var map;
var infoWindow;

function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.84, lng: -117.25},
    zoom: 14
  });

  infoWindow = new google.maps.InfoWindow({map: map});

  /*
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(pos);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
  */
}


