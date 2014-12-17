angular.module('Ski').factory('MountainFactory', function($http, $q) {
  'use strict'
  //var mountain, fetch;
  //mountain = {};

  var fetch = function(){
    var deferred = $q.defer();

    $http.get('http://localhost:3000/mountains/7')
      .success(function(response) {
        var myMountain = {};
        angular.copy(response, myMountain);
        deferred.resolve(myMountain);
    });

    return deferred.promise;
  };

  return {
    fetch: fetch
  };

  //   return $q(function(resolve, reject){
  //     $http.get('http://localhost:3000/mountains/7')    //('https://quiet-journey-8066.herokuapp.com/mountains/3')
  //     .success(function(response) {
  //       angular.copy(response, mountain);
  //       console.log(response);
  //     });
  //   });
  // };
  // return {
  //   fetch: fetch,
  //   mountain: mountain
  // };
});



