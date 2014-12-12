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
      var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
      };
      var map = new google.maps.Map(element[0], mapOptions);
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
