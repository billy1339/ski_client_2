angular.module('Ski').factory('MountainFactory', function($http) {

  var mountain = []

  $http.get('https://quiet-journey-8066.herokuapp.com/mountains')
       .success(function(response) {
          // console.log(response);
          // $scope.mountain = response.name;
          // $scope.lat = response.latitude;
          // $scope.lng = response.longitude;
          angular.copy(response, mountain);
        });


  return {
    mountain: mountain,
    fetch: fetch
  };

});



