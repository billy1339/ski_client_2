angular.module('Ski', [
  'ngRoute'
]).run(function(MountainFactory, $q, $window){
  MountainFactory.fetch();
  // debugger
  // $q.all(MountainFactory.fetch()).then(function() {
  //   document.load
  //   debugger
  // });
  // debugger
  // asynchronyous problems --> if i go straight to /map the http request takes longer than the rest of the code
});


