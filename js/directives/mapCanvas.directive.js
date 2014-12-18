angular.module('Ski').directive('mapCanvas', function(MountainFactory) {
  'use strict'
  function link (scope, element) {

    var markerArray, allMarker, mapOptions, myLatlng, promise, addInfoWindowListner, makeWindowForMarkers;
    promise = MountainFactory.fetch();

    promise.then(function(mountain){
    scope.mountain = mountain;
    myLatlng = new google.maps.LatLng(scope.mountain.longitude, scope.mountain.latitude);

    mapOptions = {
      center: myLatlng,
      zoom: 14
    };

    scope.map = new google.maps.Map(element[0], mapOptions);

    makeWindowForMarkers = function(category) {
     var infowindow = new google.maps.InfoWindow({
        content: category,
        size: new google.maps.Size(100,100)
      });
      return infowindow;
    };


    addInfoWindowListner = function(marker, category) {
      scope.input = category;
      google.maps.event.addListener(marker, 'click', function(event) {
        var infoWindow = makeWindowForMarkers(category.category);
        infoWindow.open(scope.map, marker);
        console.log(category);
      });
    };

    //icon: category.images
    allMarker = function() {
      var myLatlng, marker, i, array, length;
      array = scope.mountain.inputs;
      length = array.length;
      for(i = 0; i < length; i++) {
        myLatlng = new google.maps.LatLng(array[i].latitude, array[i].longitude);
        marker = new google.maps.Marker({
          position: myLatlng,
          draggable:false,
          animation: google.maps.Animation.DROP,
          map: scope.map,
          title: array[i].category,
          icon: array[i].url
        });
        addInfoWindowListner(marker, array[i]);
      }
    };
    allMarker();

    });
  }
  return {
    scope: {
      map: '@map',
      mountain: '@mountain',
      category: '@category'
    },
    link: link,
  };
});
