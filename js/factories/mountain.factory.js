angular.module('Ski').factory('MountainFactory', function($http, $q) {
  'use strict'


  var fetch = function(){
    var deferred, mountain;
    deferred = $q.defer();
    $http.get('https://quiet-journey-8066.herokuapp.com/mountains/3')
      .success(function(response) {
        mountain = {};
        angular.copy(response, mountain);
        deferred.resolve(mountain);
    });

    return deferred.promise;
  };

  return {
    fetch: fetch
  };
});



