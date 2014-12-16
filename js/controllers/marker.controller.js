
angular.module('Ski').controller('MarkerCtrl', function($scope, $http) {
  'use strict';

  $scope.makeMarker = function() {
    var myLatlng = setInitialLatLong();
    var marker = makeMarkerData(myLatlng);
    listnerForNewMarkerLatLong($scope.marker);
  };

  var setInitialLatLong = function() {
    var myLatlng = new google.maps.LatLng($scope.mountain.longitude, $scope.mountain.latitude);
    return myLatlng
  };

  var makeMarkerData = function(myLatlng) {
    $scope.marker = new google.maps.Marker({
      position: myLatlng,
      draggable:true,
      animation: google.maps.Animation.DROP,
      map: $scope.$$prevSibling.map,
      title:"Hello World!"
    });
    // return marker
  };

  var makeInfoWindow = function() {
    var infowindow = new google.maps.InfoWindow(
      { content: 'cha baby',
        size: new google.maps.Size(50,50)
      });
    return infowindow;
}

  var listnerForNewMarkerLatLong = function(marker) {
     google.maps.event.addListener(marker, 'click', function(event) {
        var infoWindow = makeInfoWindow()
        infoWindow.open($scope.map, marker);
        console.log('Lat: ' + event.latLng.lat() + ' and Longitude is: ' + event.latLng.lng());
      });
  };

  $scope.submitMarker = function(input, description) {
    $scope.marker.draggable = false;
    var inputParams = {
      input: {category: input.category, longitude: $scope.marker.getPosition().k, latitude: $scope.marker.getPosition().D }
    }
    debugger


    // $http.put()

    console.log(input)
    console.log(description)
    // $scope.marker.trigger('click')
    console.log($scope.marker.getPosition())
    // listnerForNewMarkerLatLong($scope.marker);

  };

});

