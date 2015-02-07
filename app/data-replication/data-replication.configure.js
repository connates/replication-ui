'use strict';


angular.module('storageApp')
    .controller('DataReplicationConfigCtrl', ['$scope', '$routeParams', '$location', 'replicationService',
        function ($scope, $routeParams, $location, replicationService) {
            $scope.currentPage = 1;
            $scope.pageSize = 10;
            $scope.status;
            $scope.disk = {};
            $scope.loading = true;
            submitForm();

            function submitForm() {
                replicationService.configReplication($scope.disk)
                    .success(function (data) {
                        $scope.loading = false;
                        $scope.disks = data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load disk data: ' + error.message;
                        $scope.loading = false;
                    });
            }
}]);