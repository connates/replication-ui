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
            .state('data-replication.configure', {
                url: "/configure",
                templateUrl: "data-replication/data-replication.configure.html",
                controller: 'DataReplicationConfigCtrl'
            })
            .state('data-migration', {
                url: "/data-migration",
                controller: 'DataMigrationCtrl',
                templateUrl: "data-migration/data-migration.html"
            })
            
    });