'use strict';

angular.module('forHim.nav', [])

.controller('navCtrl', ['$scope', function($scope) {
	$scope.navigation = false;

}])

.directive('forhimNav', function() {
	return {
			templateUrl: 'nav/nav.html',
			controller: 'navCtrl',
			replace: true,
		}
});