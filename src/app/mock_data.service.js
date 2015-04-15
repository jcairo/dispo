'use strict';

angular.module('dispo')
.service('mockData', function () {

    var exports = {
        sites: [
            {
                name: 'Pinegrove',
                location: 'East Alberta',
                size: '1 Hectare',
                polygon: [
                    {latitude: 56.53677225, longitude: -115.86765289},
                    {latitude: 56.59201007, longitude: -115.87177277},
                    {latitude: 56.59238813, longitude: -115.79143524},
                    {latitude: 56.60108254, longitude: -115.76808929},
                    {latitude: 56.54207252, longitude: -115.76328278},
                    {latitude: 56.53677225, longitude: -115.86765289},
                ],
                elevation: '745m',
                area: '1km',
            },
            {
                name: 'Woodgrove',
                location: 'East Alberta',
                size: '2 Hectares',
                polygon: [
                    {latitude: 58.0720666, longitude: -118.37287903},
                    {latitude: 58.05535853, longitude: -118.35777283},
                    {latitude: 58.05390528, longitude: -118.30421448},
                    {latitude: 58.09384799, longitude: -118.30284119},
                ],
                elevation: '539m',
                area: '2.3km',
            }
        ]
    };

    return exports;
})