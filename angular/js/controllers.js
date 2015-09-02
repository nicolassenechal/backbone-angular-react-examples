var tlControllers = angular.module('tlControllers', ['tlServices']);

tlControllers.controller('StopListCtrl', ['$scope', 'trip',
    function($scope, trip) {

        function isLate (callingPoint) {
            //Assumption that trains are either late or on time, never early
            return (callingPoint.scheduled !== callingPoint.expected);
        }

        function getClasses (callingPoint, first, last) {
            var cn = 'stop ';
            cn += (!!callingPoint.actual) ? 'stop--past ' : '';
            cn += (first) ? 'stop--first ' : '';
            cn += (last) ? 'stop--last ' : '';

            return cn;
        }

        function getLateness (callingPoint) {

            if (callingPoint.isLate) {
                var scheduled = moment(callingPoint.scheduled, 'HH:mm');
                var expected = moment(callingPoint.expected, 'HH:mm');
                return expected.diff(scheduled, 'minutes') + ' minutes late';
            } else {
                return 'On time';
            }
        }

        $scope.results = 'Wait please';
        trip.then( function (results) {

            $scope.results = results;
            $scope.trip = results.journey.origin + ' to ' + results.journey.destination;
            for (var i = 0; i < $scope.results.callingPoints.length; i++) {
                var callingPoint = $scope.results.callingPoints[i];
                callingPoint.isLate = isLate(callingPoint);
                callingPoint.expectedText = callingPoint.isLate ? callingPoint.expected : '';
                callingPoint.platform = callingPoint.platform ? callingPoint.platform : '-';
                callingPoint.classes = getClasses(callingPoint, i === 0, i === $scope.results.callingPoints.length - 1);
                callingPoint.lateClass = (callingPoint.isLate) ? 'stop__span--late' : '';
                callingPoint.lateness =  getLateness(callingPoint);
            }


            $scope.$apply();
        });
    }
]);
