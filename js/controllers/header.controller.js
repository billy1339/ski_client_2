angular.module('Ski').controller('HeaderCtrl', function($scope, $http, MountainFactory, $rootScope) {
  'use strict';
  $scope.setMtn = function(number) {
    $rootScope.mtnId = number;
  };


});
