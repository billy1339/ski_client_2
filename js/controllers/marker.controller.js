angular.module('Ski').controller('MarkerCtrl', function($scope, $http, $q) {
  'use strict';

  $scope.makeMarker = function() {
    var myLatlng = setInitialLatLong();
    var marker = makeMarkerData(myLatlng);
  };

  var setInitialLatLong = function() {
    var myLatlng = new google.maps.LatLng($scope.$$prevSibling.mountain.longitude, $scope.$$prevSibling.mountain.latitude);
    return myLatlng;
  };

  var makeMarkerData = function(myLatlng) {
    $scope.marker = new google.maps.Marker({
      position: myLatlng,
      draggable:true,
      animation: google.maps.Animation.DROP,
      map: $scope.$$prevSibling.map
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
    });

  };


  $scope.submitMarker = function(input, description) {
    $scope.marker.draggable = false;
    var params = {
      input: {category: input.category, longitude:$scope.marker.position.D, latitude: $scope.marker.position.k, mountain_id: $scope.$$prevSibling.mountain.id,  }
    };
    $http.post('https://quiet-journey-8066.herokuapp.com/inputs', JSON.stringify(params)).success(function(response){
      $q.all(submitDescription(description, response.id)).then(function() {
        clearForm();
      });
    });

  };

});

