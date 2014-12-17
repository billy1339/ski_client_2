angular.module('Ski').directive('mapCanvas', function(MountainFactory) {
  'use strict'
  function link (scope, element, attrs) {
    var markerArray, allMarker, mapOptions, myLatlng;
    var promise = MountainFactory.fetch();

    promise.then(function(myMountain){

    //myLatlng = new google.maps.LatLng(scope.$parent.mountain.longitude, scope.$parent.mountain.latitude);
    myLatlng = new google.maps.LatLng(myMountain.longitude, myMountain.latitude);

    mapOptions = {
      center: myLatlng,
      zoom: 14
    };

    scope.map = new google.maps.Map(element[0], mapOptions);

    // if (Object.keys(scope.$parent.mountain).length === 0){
    //   return;
    // };


    // markerArray =

    // allMarker = function() {
    //   var myLatlng, marker, i;
    //   var array = scope.$parent.mountain.inputs;
    //   var length = array.length;
    //   for(i = 0; i < length; i++) {
    //     myLatlng = new google.maps.LatLng(array[i].latitude, array[i].longitude);
    //     marker = new google.maps.Marker({
    //       position: myLatlng,
    //       draggable:false,
    //       animation: google.maps.Animation.DROP,
    //       map: scope.map,
    //       title: array[i].type
    //     });
    //   };
    // };

    });
    // return
  }
  return {
    scope: {
      map: '@map'
    },
    link: link,
  };
});
