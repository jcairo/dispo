'use strict';

angular.module('dispo')
.controller('mapController', function($scope, mockData, uiGmapGoogleMapApi) {

    uiGmapGoogleMapApi.then( function (maps) {
        $scope.map = {
            events: {
            tilesloaded: function (map) {
                $scope.$apply(function () {
                    console.log('this is the map instance', map);
                });
                }
            },
            center: { latitude: 56.57, longitude: -115.84 },
            zoom: 11,
            options: {mapTypeId: maps.MapTypeId.SATELLITE }
        };
    });

    $scope.sites = mockData.sites;
    $scope.setPolygons = function () {
        $scope.polygons = [];
        for (var i = 0; i < mockData.sites; i++) {
            $scope.polygons.push(mockData[i].polgyon);
        }
    };

    $scope.panMap = function(lat, lon) {
        $scope.map.panTo({ latitude: 56.6, longitude: -115.6  });
    };
});