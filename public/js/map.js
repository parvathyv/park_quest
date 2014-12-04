
function initialize() {
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(-25.363882,131.044922)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var flightPlanCoordinates = new Array(5);
  var i = 0;
  google.maps.event.addListener(map, 'click', function(e) {
    flightPlanCoordinates[i] = e.latLng;
    i = i + 1;
    placeMarker(e.latLng, map);
  });
}

function placeMarker(position, map) {
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });
  //map.panTo(position);

   var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);