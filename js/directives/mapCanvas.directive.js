angular.module('Ski').directive('mapCanvas', function() {

  function link (scope, element, attrs) {



    // attrs.$observe('lat', function(value) {
    //   element.find('latitude').text(value);
    //   // console.log(value);
    // });

    // // console.log(getLat())
    // // attrs.$observe('lat');

    // attrs.$observe('lng', function(value) {
    //   element.find('longitude').text(value);
    // });



      var myLatlng = new google.maps.LatLng(scope.$parent.mountain.longitude, scope.$parent.mountain.latitude); //scope.$parent.mountain.latitude, scope.$parent.mountain.longitude);

      var mapOptions = {
        center: myLatlng,
        zoom: 14
      };
      // element[0] is the actual google map data.
      scope.map = new google.maps.Map(element[0], mapOptions);
      console.log(scope.$parent.mountain.inputs[0])

      var markerArray = scope.$parent.mountain.inputs;

      var allMarker = function(array) {
        var length = array.length;

        for(i = 0; i < array.length; i++) {
          var myLatlng = new google.maps.LatLng(array[i].latitude, array[i].longitude);
          var marker = new google.maps.Marker({
            position: myLatlng,
            draggable:false,
            animation: google.maps.Animation.DROP,
            map: scope.map,
            title: array[i].type
          });
        };
     };
     allMarker(markerArray);
      // google.maps.event.addListener(marker, 'mouseover', toggleBounce);

      // function toggleBounce() {

      //   if (marker.getAnimation() != null) {
      //     marker.setAnimation(null);
      //   } else {
      //     marker.setAnimation(google.maps.Animation.BOUNCE);
      //   }
      // }
      // to drop all markers at once.
      function drop() {
        for (var i =0; i < markerArray.length; i++) {
          setTimeout(function() {
          addMarkerMethod();
          }, i * 200);
        }
      }

    }
    return {

      scope: {
        lat: '@',
        lng: '@',
        map: '@map'
      },

      // template: '<p> Lat: {{lat}} Lng: {{lng}}</p>',
      // template: '<latitude></latitude>, <longitude></longitude>',
      link: link,

    };
  });
