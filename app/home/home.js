'use strict';

angular.module('forHim.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl',
    replace: true
  });
}])

.controller('homeCtrl', [function() {

}]);