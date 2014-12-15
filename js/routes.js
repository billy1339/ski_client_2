angular.module('Ski').config(function($routeProvider) {
  'use strict';
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/home.html'
    })
    .when('/map', {
      templateUrl: 'templates/map.html',
      controller: 'MapCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
