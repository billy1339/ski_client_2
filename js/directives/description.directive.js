angular.module('Ski').directive('gaModal', function() {
    return {
        restrict: 'E',

        transclude: true,

        templateUrl: 'templates/description.html',

        scope: {
            title: '@',
            datauserid: '@'
        }
    };
});

