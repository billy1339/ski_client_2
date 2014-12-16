
angular.module('Ski').controller('MapCtrl', function($scope, $http, MountainFactory, $q) {
  'use strict';

  console.log($scope.mountain)
  $scope.mountain = MountainFactory.mountain;
  // $http.get('https://quiet-journey-8066.herokuapp.com/mountains/5')
  //      .success(function(response) {
  //         // console.log(response);
  //         $scope.mountain = response.name;
  //         $scope.lat = response.latitude;
  //         $scope.lng = response.longitude;
  //       });
  debugger
  console.log($scope.mountain);

});

