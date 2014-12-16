
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

  var listnerForNewMarkerLatLong = function(marker) {
     google.maps.event.addListener(marker, 'click', function(event) {
        console.log('Lat: ' + event.latLng.lat() + ' and Longitude is: ' + event.latLng.lng());
        marker.draggable = false;
      });
  };

  $scope.submitMarker = function() {
    $scope.marker.click()
    // listnerForNewMarkerLatLong($scope.marker);
    $scope.marker.draggable = false;
  };

});

