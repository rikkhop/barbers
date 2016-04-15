'use strict';

angular.module('forHim.pricelist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pricelist', {
    templateUrl: 'priceList/pricelist.html',
    controller: 'pricelistCtrl'
  });
}])

.controller('pricelistCtrl', [function() {

}]);