var tlControllers = angular.module('tlControllers', ['tlServices']);

tlControllers.controller('StopListCtrl', ['$scope', 'trip',
    function($scope, trip) {
        $scope.results = 'Wait please';
        trip.then( function (results) {

            $scope.results = results;
            $scope.trip = results.journey.origin + ' to ' + results.journey.destination;


            $scope.$apply();
        });
    }
]);
