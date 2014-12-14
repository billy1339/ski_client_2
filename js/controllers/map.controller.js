angular.module('Ski').controller('MapCtrl', function($scope, $http) {
  'use strict';


  $http.get('https://quiet-journey-8066.herokuapp.com/mountains/5').success(function(response) {
      console.log(response);
      $scope.mountain = response.name;
      $scope.lat = response.latitude;
      $scope.lng = response.longitude;
    });

});

angular.module('Ski').directive('mapCanvas', function() {
  return {
    link: function(scope, element) {
      var myLatlng = new google.maps.LatLng(43.6121339, -72.8010977);
      var mapOptions = {
        center: myLatlng,
        zoom: 14
      };
      // element[0] is the actual google map data.
      var map = new google.maps.Map(element[0], mapOptions);

      var marker = new google.maps.Marker({
        // var myLatlng = (43.6121339, -72.8010977)
        position: myLatlng,
        map: map,
        title:"Hello World!"
      });
    }
  };
});




// <script type="text/javascript">
//         function initialize() {
//           var mapOptions = {
//             center: { lat: -34.397, lng: 150.644},
//             zoom: 8
//           };
//           var map = new google.maps.Map(document.getElementById('map-canvas'),
//               mapOptions);
//         }

//   </script>
