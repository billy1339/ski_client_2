angular.module('Ski').directive('mapCanvas', function(MountainFactory) {
  'use strict'
  function link (scope, element) {

    var markerArray, mapOptions, allMarker, myLatlng, promise, addModalListner, doesHaveFlags;
    promise = MountainFactory.fetch();

    promise.then(function(mountain){

    if(scope.$root.mtnId === undefined) {
      scope.mountain = mountain[0];
    } else {
      scope.mountain = mountain[scope.$root.mtnId];
    }


    myLatlng = new google.maps.LatLng(scope.mountain.longitude, scope.mountain.latitude);


  //   var styles = [
  //   {
  //     featureType: 'all',
  //     stylers: [
  //       {saturation: -5},
  //       {lightness: -5}
  //     ]
  //   }
  // ];

    mapOptions = {
      center: myLatlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    // var styledMap = new google.maps.StyledMapType(styles, {name: 'Mt.Mapper'});

    scope.map = new google.maps.Map(element[0], mapOptions);
    // scope.map.setOptions({styles: styles});
    // debugger
    // scope.map.mapTypes.set('map_style', styledMap);

    addModalListner = function(marker, category) {
      scope.input = category;
      google.maps.event.addListener(marker, 'click', function(event) {
        $('#modalId'+category.id).click()
        scope.deleteMarker = marker;  //32
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
        marker.set('id', 'markerId'+array[i].id)
        // marker.set('data-toggle', "modal");
        // marker.set('data-target','#description'+array[i].id+'Modal');
        addModalListner(marker, array[i]);
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
