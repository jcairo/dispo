'use strict';

angular.module('dispo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'mgcrea.ngStrap', 'uiGmapgoogle-maps'])
.config(function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
    });

    $urlRouterProvider.otherwise('/');

    uiGmapGoogleMapApiProvider.configure({
        v: 3.17,
        libraries: 'weather, geometry, visualization'
    });
})
;
