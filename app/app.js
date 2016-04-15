'use strict';

// Declare app level module which depends on views, and components
angular.module('forHim', [
  'ngRoute',
  'forHim.nav',
  'forHim.home',
  'forHim.openingTimes',
  'forHim.pricelist',
  'forHim.contact',
  'ngAnimate'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
