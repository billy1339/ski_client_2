angular.module('Ski').directive('markerMaker', function() {
  'use strict'
  return {
    link: function(scope, element) {
      var marker, myLatlng, map;
      myLatlng = new google.maps.LatLng(43.6121339, -72.8010977);      //     (43.6121339, -72.8010977);
      marker = new google.maps.Marker({
        position: myLatlng,
        draggable:true,
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Hello World!'
      });
    //   google.maps.event.addListener(marker, 'mouseover', toggleBounce);

    //   function toggleBounce() {

    //     if (marker.getAnimation() != null) {
    //       marker.setAnimation(null);
    //     } else {
    //       marker.setAnimation(google.maps.Animation.BOUNCE);
    //     }
    //   }
    // }


  }

};
