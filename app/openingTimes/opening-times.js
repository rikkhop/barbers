'use strict';

angular.module('forHim.openingTimes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/opening-times', {
    templateUrl: 'openingTimes/opening-times.html',
    controller: 'openingTimesCtrl'
  });
}])

.controller('openingTimesCtrl', [function() {

}]);