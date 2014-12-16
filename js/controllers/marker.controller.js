
angular.module('Ski').controller('MarkerCtrl', function($scope, $http) {
  'use strict';

  $scope.makeMarker = function() {
    var myLatlng = setInitialLatLong();
    var marker = makeMarkerData(myLatlng);
    listnerForNewMarkerLatLong(marker);
  };

  var setInitialLatLong = function() {
    var myLatlng = new google.maps.LatLng($scope.mountain.longitude, $scope.mountain.latitude);
    return myLatlng
  };

  var makeMarkerData = function(myLatlng) {
    var marker = new google.maps.Marker({
      position: myLatlng,
      draggable:true,
      animation: google.maps.Animation.DROP,
      map: $scope.$$prevSibling.map,
      title:"Hello World!"
    });
    return marker
  };

  var listnerForNewMarkerLatLong = function(marker) {
     google.maps.event.addListener(marker, 'dragend', function(event) {
        alert( 'Lat: ' + event.latLng.lat() + ' and Longitude is: ' + event.latLng.lng() );
      });
  };

});

