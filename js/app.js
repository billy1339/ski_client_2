angular.module('Ski', [
  'ngRoute'
]).run(function(MountainFactory, $q){
  MountainFactory.fetch();
  // asynchronyous problems --> if i go straight to /map the http request takes longer than the rest of the code

});


