angular.module('Ski').factory('MountainFactory', function($http, $q) {
  var mountain = {};
  var fetch = function() {
    $http.get('https://quiet-journey-8066.herokuapp.com/mountains/3')
        .success(function(response) {
            angular.copy(response, mountain);
          });
  };

  return {
    fetch: fetch,
    mountain: mountain

  };

});



