'use strict';

angular.module('dispo')
.controller('mapController', function($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});