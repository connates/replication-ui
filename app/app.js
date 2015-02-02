'use strict';

/**
 * Main module.
 */
angular.module('storageApp', ['ngResource', 'ngRoute', 'mainNavList', "ui.router"]).config(
    function ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/data-replication")

        $stateProvider
            .state('data-replication', {
                url: "/data-replication",
                controller: 'DataReplicationCtrl',
                templateUrl: "data-replication/data-replication.html"
            })
            .state('data-replication.running', {
                url: "/running",
                templateUrl: "data-replication/data-replication.running.html",
                controller: 'DataReplicationRunningCtrl'
            })
            .state('data-replication.congigure', {
                url: "/configure",
                templateUrl: "route1.list.html",
                controller: function ($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('data-migration', {
                url: "/data-migration",
                controller: 'DataMigrationCtrl',
                templateUrl: "data-migration/data-migration.html"
            })
            .state('route2.list', {
                url: "/list",
                templateUrl: "route2.list.html",
                controller: function ($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            })
    });






/*   $routeProvider.when('/', {
            templateUrl: 'data-replication/data-replication.html',
            controller: 'DataReplicationCtrl'
        }).when('/data-migration', {
            templateUrl: 'data-migration/data-migration.html',
            controller: 'DataMigrationCtrl'
        }).when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController',
        }).otherwise({
            redirectTo: '/'
        });
    });*/