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

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-container'), {
    center: {lat: 32.878484, lng: -117.213509},
    zoom: 14
  });

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