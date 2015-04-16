'use strict';

angular.module('dispo')
.service('mockData', function () {

    var exports = {
        sites: [
            {
                name: 'Oakland',
                location: 'East Alberta',
                size: '8 Hectares',
                polygon: [
                    [58.91, -118.378],
                    [58.92, -118.37287903],
                    [58.93, -118.35777283],
                    [58.92, -118.31],
                ],
                elevation: '800m',
                area: '10km',
            },
            {
                name: 'Pinegrove',
                location: 'East Alberta',
                size: '1 Hectare',
                polygon: [
                    [56.53677225,  -115.86765289],
                    [56.59201007,  -115.87177277],
                    [56.59238813,  -115.79143524],
                    [56.60108254,  -115.76808929],
                    [56.54207252,  -115.76328278],
                    [56.53677225,  -115.86765289]
                ],
                elevation: '745m',
                area: '1km',
            },
            {
                name: 'Woodgrove',
                location: 'East Alberta',
                size: '2 Hectares',
                polygon: [
                    [58.0720666, -118.37287903],
                    [58.05535853, -118.35777283],
                    [58.05390528, -118.30421448],
                    [58.09384799, -118.30284119]
                ],
                elevation: '539m',
                area: '2.3km',
            }
        ]
    };

    return exports;
});