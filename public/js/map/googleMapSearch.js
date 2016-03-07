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

function createMap() {
  var map = new google.maps.Map(document.getElementById('map-container'), {
    center: {lat: 32.878484, lng: -117.213509}
    ,zoom: 13
    ,mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
    }, function() {
      // error handling code
    });
  } else {
    // Browser doesn't support Geolocation
    alert("Geolocation is not supported by the current web browser, so we set your current location to San Diego. You can change the location manually with the search box above");
  }
  return map;
}


// Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function postInitMap() {
  var map = createMap();
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
    lat = event.latLng.lat();
    lng = event.latLng.lng();
    document.getElementById('lat').value = lat;
    document.getElementById('lng').value = lng;
  });
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location
    ,map: map
  });
}

function searchInitMap() {
  var map = createMap();
  var markers = [];
  // fetch the lat and lng data of each location from the hidden fields
  var numOfPoints = parseInt(document.getElementById('len').value);
  var bounds = new google.maps.LatLngBounds();

  for (var i = 0; i < numOfPoints; ++i) {
    var latLng = new google.maps.LatLng(
      parseFloat(document.getElementById('lat'+i).value),
      parseFloat(document.getElementById('lng'+i).value)
    );
    var marker = new google.maps.Marker({
      map: map
      ,title: (i+1).toString()
      ,position: latLng
    });

    var name = document.getElementById('name'+i).value;
    var price = '$'+document.getElementById('price'+i).value;
    var description = document.getElementById('description'+i).value;
    var contentString = name + ', ' + description + '<br>' + price + '<br><a href="foodinfo?id='+document.getElementById('createdOn'+i).value+'">view</a>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    markers.push(marker);
    bounds.extend(latLng);
  }
  map.fitBounds(bounds);
}

function foodinfoInitMap() {
  var lat = parseFloat(document.getElementById('lat').value);
  var lng = parseFloat(document.getElementById('lng').value);
  var latLng = new google.maps.LatLng(lat, lng);
  var map = new google.maps.Map(document.getElementById('map-container'), {
    center: { lat: lat, lng: lng }
    ,zoom: 13
  });
  var marker = new google.maps.Marker({
    map: map
    ,position: latLng
  });
}

/*
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-container'), {
    center: {lat: 32.878484, lng: -117.213509},
    zoom: 12
  });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    alert("Geolocation is not supported by the current web browser, so we set your current location to San Diego. You can change the location ")
  }


  var lat_lng1 = {lat: 32.878484, lng: -117.213509};
  var lat_lng2 = {lat: 32.877946, lng: -117.23287};
  var lat_lng3 = {lat: 32.870494, lng: -117.238939};
  var lat_lng4 = {lat: 32.870521, lng: -117.217105};
  var lat_lng5 = {lat: 32.868592, lng: -117.220820};
  var lat_lng6 = {lat: 32.874389, lng: -117.241458};
  var lat_lng7 = {lat: 32.878484, lng: -117.213509};
  var lat_lng8 = {lat: 32.869569, lng: -117.231897};
  var lat_lng9 = {lat: 32.884414, lng: -117.211912};

  var infowindows = [
    new google.maps.InfoWindow({
      content: "Home-cooked Japanese with Kimchi"
    }),
    new google.maps.InfoWindow({
      content: "Salmon and Cole Slaw"
    }),
    new google.maps.InfoWindow({
      content: "Grilled salmon with grapefruit cole slaw"
    }),
    new google.maps.InfoWindow({
      content: "Jordan's pulled pork lettuce wrap with secret sauce"
    }),
    new google.maps.InfoWindow({
      content: "Train wreck of diced vegetable and strange egg like liquid"
    }),
    new google.maps.InfoWindow({
      content: "Home-cooked Japanese style meal"
    }),
    new google.maps.InfoWindow({
      content: "Train wreck of diced vegetable and strange egg like liquid"
    }),
    new google.maps.InfoWindow({
      content: "Dried vegetable and nut curry"
    }),
    new google.maps.InfoWindow({
      content: "Luke's sausage taco with cream sauce"
    }),
    new google.maps.InfoWindow({
      content: "Dried vegetable and nut curry"
    }),
    new google.maps.InfoWindow({
      content: "Garden salad with oriental dressing and grilled salmon"
    }),
    new google.maps.InfoWindow({
      content: "Craft steak burger, a nice companion for a San Diegan brewary IPA"
    }),
    new google.maps.InfoWindow({
      content: "Jasmine's craft steak burger"
    }),
    new google.maps.InfoWindow({
      content: "Home-cooked Chicken curry with nan bread"
    }),
    new google.maps.InfoWindow({
      content: "Kimberly's Irish smoked salmon canapes"
    }),
    new google.maps.InfoWindow({
      content: "Open sandwich with goat cheese, chery tomatoes, spinach, and salami"
    }),
  ];

  var marker1 = new google.maps.Marker({
    position: lat_lng1,
    map: map,
  });
  var marker2 = new google.maps.Marker({
    position: lat_lng2,
    map: map,
  });
  var marker3 = new google.maps.Marker({
    position: lat_lng3,
    map: map,
  });
  var marker4 = new google.maps.Marker({
    position: lat_lng4,
    map: map,
  });
  var marker5 = new google.maps.Marker({
    position: lat_lng5,
    map: map,
  });
  var marker6 = new google.maps.Marker({
    position: lat_lng6,
    map: map,
  });
  var marker7 = new google.maps.Marker({
    position: lat_lng7,
    map: map,
  });
  var marker8 = new google.maps.Marker({
    position: lat_lng8,
    map: map,
  });
  var marker9 = new google.maps.Marker({
    position: lat_lng9,
    map: map,
  });
  marker1.addListener('click', function() {
    infowindows[0].open(map, marker1);
  });
  marker2.addListener('click', function() {
    infowindows[1].open(map, marker2);
  });
  marker3.addListener('click', function() {
    infowindows[2].open(map, marker3);
  });
  marker4.addListener('click', function() {
    infowindows[3].open(map, marker4);
  });
  marker5.addListener('click', function() {
    infowindows[4].open(map, marker5);
  });
  marker6.addListener('click', function() {
    infowindows[5].open(map, marker6);
  });
  marker7.addListener('click', function() {
    infowindows[6].open(map, marker7);
  });
  marker8.addListener('click', function() {
    infowindows[7].open(map, marker8);
  });
  marker9.addListener('click', function() {
    infowindows[8].open(map, marker9);
  });

}
*/