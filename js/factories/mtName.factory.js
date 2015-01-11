angular.module('Ski').factory('MtNameFactory', function($rootScope) {
  'use strict';

  var set = function() {
    var mtName = ['Killington', 'Jackson Hole'];
    $rootScope.mtName = mtName;
  }

   return {
    mtName: set()
  };

});
