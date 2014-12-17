angular.module('Ski').controller('MapCtrl', function($scope, $http, MountainFactory) {
  'use strict';

  $scope.imageCategories = {
    lift: {title: 'Lift', url: 'http://i.imgur.com/R94MVUJ.png'},
    parking: {parking: 'Parking', url: 'http://i.imgur.com/ABBZTQV.png'},
    trailClosed: {trailClosed: 'Trail Closed', url: 'http://i.imgur.com/rmRJKuY.png'},
    trailConditions: {trailConditions: 'Trail Conditions', url:'http://i.imgur.com/UYs1CFk.png'},
    powder: {title: 'Powder', url: 'http://i.imgur.com/hel1qm8.png'},
    lines: {title: 'Long Lines', url: 'http://i.imgur.com/7gawLsF.png'},
    lodge: {title: 'Lodge', url: 'http://i.imgur.com/Xz8JpuJ.png'},
    park: {title: 'Snow Park', url: 'http://i.imgur.com/A9AQssm.png'}

  };
});

