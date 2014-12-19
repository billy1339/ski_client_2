angular.module('Ski').config(function($routeProvider) {
  'use strict';
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/home.html'
    })
    .when('/map/Killington', {
      templateUrl: 'templates/map.html',
    })
    .when('/map/JacksonHole', {
      templateUrl: 'templates/map.html',
    })
    .otherwise({
      redirectTo: '/home'
    });
});
