
angular.module('Ski').controller('MarkerCtrl', function($scope, $http) {
  'use strict';

  $scope.makeMarker = function() {
    var myLatlng = new google.maps.LatLng($scope.lat, $scope.lng);
    // 43.6121339, -72.8010977
    var marker = new google.maps.Marker({
          position: myLatlng,
          draggable:true,
          animation: google.maps.Animation.DROP,
          map: $scope.$$prevSibling.map,
          title:"Hello World!"
        });


    google.maps.event.addListener(marker, 'dragend', function(event) {
      alert( 'Lat: ' + event.latLng.lat() + ' and Longitude is: ' + event.latLng.lng() );
    });

    //     google.maps.event.addListener(marker, 'mouseover', toggleBounce);

    //   function toggleBounce() {

    //     if (marker.getAnimation() != null) {
    //       marker.setAnimation(null);
    //     } else {
    //       marker.setAnimation(google.maps.Animation.BOUNCE);
    //     }
    //   }
  };





});

