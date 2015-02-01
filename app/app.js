'use strict';

/**
 * Main module.
 */
angular.module('storageApp', ['ngResource', 'ngRoute', 'mainNavList']).config(
    function ($routeProvider) {
        $routeProvider.when('/', {
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
    });