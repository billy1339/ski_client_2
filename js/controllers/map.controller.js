
angular.module('Ski').controller('MapCtrl', function($scope, $http) {
  'use strict';


  $http.get('https://quiet-journey-8066.herokuapp.com/mountains/5')
       .success(function(response) {
          // console.log(response);
          $scope.mountain = response.name;
          $scope.lat = response.latitude;
          $scope.lng = response.longitude;
        });


});

