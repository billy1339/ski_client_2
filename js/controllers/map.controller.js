angular.module('Ski').controller('MapCtrl', function($scope, $http) {
  'use strict';
  $scope.name = "William"

  $http.$.get('/path/to/file', function(data) {
    /*optional stuff to do after success */
  /});

  var mapOptions = {
    center: new google.maps.LatLng(43.6121339, -72.8010977),
    zoom: 14
  };

  $scope.map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);



});
