'use strict';
// diskService to acess the API
angular.module('storageApp')
    .factory('replicationService', ['$http', function ($http) {

        var urlBase = 'http://localhost:3000/disk';
        var replicationService = {};

        replicationService.configReplication = function (disk) {
            return $http.post(urlBase, disk);
        };

        return replicationService;
}]);