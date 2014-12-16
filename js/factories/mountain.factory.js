angular.module('Ski').factory('MountainFactory', function($http) {
  var mountain = {};
  var fetch = function() {
    $http.get('https://quiet-journey-8066.herokuapp.com/mountains/3')
         .success(function(response) {
            // console.log(response);
            // $scope.mountain = response.name;
            // $scope.lat = response.latitude;
            // $scope.lng = response.longitude;

            angular.copy(response, mountain);
            // console.log(response);
            // console.log(mountain);
          });
  };


  return {
    fetch: fetch,
    mountain: mountain

  };

});



