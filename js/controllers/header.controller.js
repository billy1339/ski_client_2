angular.module('Ski').controller('HeaderCtrl', function($scope, $http, MountainFactory, $rootScope) {
  'use strict';
  $scope.setMtn = function(number) {
    $rootScope.mtnId = number;
  };

  $scope.getGeoPosition = function() {
    if(geoPosition.init()){  // Geolocation Initialisation
            geoPosition.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
    } else{
          alert('you didnt give me permission')
    }
    function success_callback(p){
        alert('latitude is: '+p.coords.latitude+' longitude is: '+p.coords.longitude);
        // p.latitude : latitude value
        // p.longitude : longitude value
    }

    function error_callback(p){
        // p.message : error message
        alert(p.message);
    }
  };

});
