angular.module('Ski').controller('MarkerCtrl', function($scope, $http, $q) {
  'use strict';

  $scope.makeMarker = function() {
    var myLatlng = setInitialLatLong();
    var marker = makeMarkerData(myLatlng);
    listnerForNewMarkerLatLong($scope.marker);
  };

  var setInitialLatLong = function() {
    var myLatlng = new google.maps.LatLng($scope.mountain.longitude, $scope.mountain.latitude);
    return myLatlng;
  };

  var makeMarkerData = function(myLatlng) {
    $scope.marker = new google.maps.Marker({
      position: myLatlng,
      draggable:true,
      animation: google.maps.Animation.DROP,
      map: $scope.$$prevSibling.map,
      title: 'Hello World!'
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
        var infoWindow = makeInfoWindow();
        infoWindow.open($scope.map, marker);
        console.log('Lat: ' + event.latLng.lat() + ' and Longitude is: ' + event.latLng.lng());
      });
  };

   var clearForm = function() {
        $scope.input = {};
        $scope.description = {};
    };

  var submitDescription = function(description, response_id) {
    var params = {
      description: {body: description.body, input_id: response_id}
    };

    $http.post('https://quiet-journey-8066.herokuapp.com/descriptions', params).success(function(response) {
      console.log(response);
    });

  };


  $scope.submitMarker = function(input, description) {
    $scope.marker.draggable = false;
    var params = {
      input: {category: input.category, longitude:$scope.marker.position.D, latitude: $scope.marker.position.k, mountain_id: $scope.mountain.id,  }
    }
    $http.post('https://quiet-journey-8066.herokuapp.com/inputs', JSON.stringify(params)).success(function(response){
      console.log(response);
      $q.all(submitDescription(description, response.id)).then(function() {
        clearForm();
      });
    });

  };

});

