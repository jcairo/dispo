'use strict';

angular.module('dispo')
.controller('mapController', function($scope, mockData) {
    var map;

    $scope.$on('mapInitialized', function(event, mapInstance) {
        map = mapInstance;
    });

    $scope.sites = mockData.sites;
    $scope.setPolygons = function () {
        $scope.polygons = [];
        for (var i = 0; i < mockData.sites; i++) {
            $scope.polygons.push(mockData[i].polgyon);
        }
    };

    $scope.panMap = function(lat, lon) {
        map.panTo({lat: lat, lng:lon});
        map.setZoom(10);
    };
});