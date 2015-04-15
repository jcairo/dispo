'use strict';

angular.module('dispo')
.controller('mapController', function($scope, mockData) {
    $scope.map = {
        center: { latitude: 56.53677225, longitude: -115.86765289 },
        zoom: 10,
        //options: {mapTypeId: google.maps.MapTypeId.SATELLITE }
    };

    $scope.sites = mockData.sites;
    $scope.setPolygons = function () {
        $scope.polygons = [];
        for (var i = 0; i < mockData.sites; i++) {
            $scope.polygons.push(mockData[i].polgyon);
        }
    }
});