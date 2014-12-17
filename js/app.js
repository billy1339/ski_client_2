angular.module('Ski', ['ngRoute']).run(function(MountainFactory){
  'use strict'
  debugger
  //MountainFactory.fetch();


  // $interval(function() {console.log('hi')}, 5000);
  // $scope.$watch(MountainFactory.mountain, onChange(document.load())

  // angular.element($window).ready(function() {
  //   angular.bootstrap($window, ["Ski"]);
  // });



  // $q.all(MountainFactory.fetch()).then(function() {
  //   document.load
  //   debugger
  // });
  // debugger
  // asynchronyous problems --> if i go straight to /map the http request takes longer than the rest of the code
//   (function() {
//     var myApplication = angular.module("Ski", ['ngRoute']);
//     debugger
//     fetchData().then(bootstrapApplication);

//     function fetchData() {
//         var initInjector = angular.injector(["ng"]);
//         var $http = initInjector.get("$http");

//         return $http.get("/path/to/data.json").then(function(response) {
//             myApplication.constant("config", response.data);
//         }, function(errorResponse) {
//             // Handle error case
//             console.log('tis an error')
//         });
//     }

//     function bootstrapApplication() {
//         debugger
//         angular.element(document).ready(function() {
//             angular.bootstrap(document, ["Ski"]);
//         });
//     }
// }());


});


