'use strict';

angular.module('dispo')
.controller('mapController', function($scope, $timeout, mockData) {
    var map;

    $scope.$on('mapInitialized', function(event, mapInstance) {
        map = mapInstance;
    });

    $scope.submit = function () {

    };

    $scope.sites = mockData.sites;
    $scope.setPolygons = function () {
        $scope.polygons = [];
        for (var i = 0; i < mockData.sites; i++) {
            $scope.polygons.push(mockData[i].polgyon);
        }
    };

    $scope.panMap = function(lat, lon) {
        $timeout( function () {
            map.setZoom(10);
        }, 250);
        $timeout( function () {
            map.setZoom(9);
        }, 500);
        $timeout( function () {
            map.setZoom(8);
        }, 750);
        $timeout( function () {
            map.setZoom(7);
        }, 1000);
        $timeout( function () {
            map.panTo({lat: lat, lng:lon});
        }, 1250);
        $timeout( function () {
            map.setZoom(8)
        }, 1500);
        $timeout( function () {
            map.setZoom(9)
        }, 1750);
        $timeout( function () {
            map.setZoom(10)
        }, 2000);
        $timeout( function () {
            map.setZoom(11)
        }, 2000);
    };
});