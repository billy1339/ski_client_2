angular.module('Ski').directive('mapCanvas', function() {
  'use strict'
  function link (scope, element, attrs) {
    attrs.$observe('lat', function(value) {
      element.find('latitude').text(value);
      // console.log(value);
    });

    // console.log(getLat())
    // attrs.$observe('lat');

    attrs.$observe('lng', function(value) {
      element.find('longitude').text(value);
    });
        // var x = element.find('longitude')[0];
    // var x = document.getElementsByTagName('longitude')[0];

    // var variables = function() {
    //   var x = element.find('longitude')[0];
    // }
    // event.addDomListener(window, 'load', variables);

    // debugger
    // console.log(element.find('longitude'))
    // var x = element.find('longitude')[0];
    // var y = element.find('longitude')[0].innerText;
    // debugger
    // console.log((element.find('longitude')[0]).innerHTML);
    // console.log(document.getElementsByTagName('longitude')[0].innerHTML)
      // console.log({{lat}})
      // return '{{lat}}';
      // console.log(scope);
      // debugger
      // console.log(element.id);
      // var myLatlng = new google.maps.LatLng(attrs.lat, );      //     (43.6121339, -72.8010977);
      // var mapOptions = {
      //   center: myLatlng,
      //   zoom: 14
      // };
      // // element[0] is the actual google map data.
      // var map = new google.maps.Map(element[0], mapOptions);

      // var markerArray = [];

      // var marker = new google.maps.Marker({
      //   // var myLatlng = (43.6121339, -72.8010977)
      //   position: myLatlng,
      //   draggable:true,
      //   animation: google.maps.Animation.DROP,
      //   map: map,
      //   title:"Hello World!"
      // });
      // google.maps.event.addListener(marker, 'mouseover', toggleBounce);

      // function toggleBounce() {

      //   if (marker.getAnimation() != null) {
      //     marker.setAnimation(null);
      //   } else {
      //     marker.setAnimation(google.maps.Animation.BOUNCE);
      //   }
      // }

      // to drop all markers at once.
      // function drop() {
      //   for (var i =0; i < markerArray.length; i++) {
      //     setTimeout(function() {
      //     addMarkerMethod();
      //     }, i * 200);
      //   }
      // }

    }
    return {
      scope: {
        lat: '@',
        lng: '@'
      },
      // template: '<p> Lat: {{lat}} Lng: {{lng}}</p>',
      template: '<latitude></latitude>, <longitude></longitude>',
      link: link
    };
  });
