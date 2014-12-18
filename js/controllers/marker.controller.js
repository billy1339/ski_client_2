angular.module('Ski').controller('MarkerCtrl', function($scope, $http, $q, MountainFactory) {
  'use strict';

  $scope.imageCategories = {
    'lift': {title: 'Lift', url: 'http://i.imgur.com/R94MVUJ.png'},
    'parking': {title: 'Parking', url: 'http://i.imgur.com/ABBZTQV.png'},
    'trail-closed': {title: 'Trail-Closed', url: 'http://i.imgur.com/rmRJKuY.png'},
    'trail-conditions': {title: 'Trail-Conditions', url:'http://i.imgur.com/UYs1CFk.png'},
    'powder': {title: 'Powder', url: 'http://i.imgur.com/hel1qm8.png'},
    'lines': {title: 'Long-Lines', url: 'http://i.imgur.com/7gawLsF.png'},
    'lodge': {title: 'Lodge', url: 'http://i.imgur.com/Xz8JpuJ.png'},
    'snow-park': {title: 'Snow-Park', url: 'http://i.imgur.com/A9AQssm.png'}
  };

  $scope.arrayOfCategories = [
    'Lift',
    'Parking',
    'Trail-Closed',
    'Trail-Conditions',
    'Powder',
    'Long-Lines',
    'Lodge',
    'Snow-Park',
  ];

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
      map: $scope.$$prevSibling.map,
      icon: 'images/cablecar.png'
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
  var findInputUrl = function(input) {
    var lower, inputObject;
    lower = input.toLowerCase();
    inputObject = $scope.imageCategories[lower].url;
    return inputObject;

  };

  $scope.submitMarker = function(input, description) {
    var url, params;
    $scope.marker.draggable = false;
    url = findInputUrl(input.category);
    params = {
      input: {category: input.category, url: url, longitude:$scope.marker.position.D, latitude: $scope.marker.position.k, mountain_id: $scope.$$prevSibling.mountain.id,  }
    };
    $http.post('https://quiet-journey-8066.herokuapp.com/inputs', params).success(function(response){
      $q.all(submitDescription(description, response.id)).then(function() {
        clearForm();
      });
    });
  };

  $scope.newDescription = function(description, id) {
    var params = {
      description: {body: description.new, input_id: id}
    };
    $q.all($http.post('https://quiet-journey-8066.herokuapp.com/descriptions', params).success(function() {
    }).then(function() {
      $scope.body = {};
      // clearForm();
    }));
  };

  var promise = MountainFactory.fetch();
  promise.then(function(mountain){
    debugger
    var colorExistingFlags= function(mountain) {
      for(var i=0; i < mountain.inputs.length;i++) {
        debugger
        if (mountain.inputs[i].flags.length !== 0) {
          $('#flagOne'+mountain.inputs[i].id).addClass('turnRed');
          debugger
        }
      }
    };
    colorExistingFlags(mountain);
  });

  $scope.createFlag = function(input, flagNum) {
    if (flagNum === 1) {
       $('#flagOne'+input.id).addClass('turnRed');
    } else {
       $('#flagTwo'+input.id).addClass('turnRed');
    }
    if (input.flags.length === 0) {
      $http.post('https://quiet-journey-8066.herokuapp.com/flags', {flag: {input_id: input.id}}).success(function(response) {
        console.log(response)
      });
    } else {
      $http.delete('https://quiet-journey-8066.herokuapp.com/inputs/'+input.id).success(function(response) {
        console.log(response);
      });
    }

  };

});



angular.module('Ski').directive('wsDescription', function() {
    return {
        restrict: 'E',

        transclude: true,

        templateUrl: 'templates/description-modal.html',

        scope: {
            title: '@',
            inputid: '@'
        }
    };
});



