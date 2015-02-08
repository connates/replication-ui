'use strict';


angular.module('storageApp')
    .controller('DataReplicationConfigCtrl', ['$scope', '$routeParams', '$location', 'replicationService',
        function ($scope, $routeParams, $location, replicationService) {
            $scope.currentPage = 1;
            $scope.pageSize = 10;
            $scope.status;
            $scope.loading = true;
            $scope.submitForm = function () {
                var disk = {
                    'source_ip': this.sourceIp,
                    'destination_ip': this.destinationIp,
                    'source_disk': this.sourceDisk,
                    'destination_disk': this.destinationDisk,
                    'snapshot_policy': this.snapshotPolicy,
                    'validation_policy': this.validationPolicy,
                    'memory': this.memory,
                    'frequency': this.frequency,
                    'bandwidth': this.bandwidth
                };

                alert(JSON.stringify(disk));
                replicationService.configReplication(disk)
                    .success(function (data) {
                        $scope.loading = false;
                        //$scope.disks = data;
                        $location.path('/data-replication/running');
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load disk data: ' + error.message;
                        $scope.loading = false;
                    });
            }
}]);