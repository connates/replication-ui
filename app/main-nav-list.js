'use strict';
/**
 *
 */

var navlist = angular.module('mainNavList', []);

navlist.controller('mainNavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'data-replication';
        if (currentRoute.match('data-replication')) {
            currentRoute = 'data-replication';
        } else if (currentRoute.match('data-migration')) {
            currentRoute = 'data-migration';
        }
        return page === currentRoute ? 'active' : '';
    };
}]);