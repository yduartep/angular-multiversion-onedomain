'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('myApp', [
    'ngRoute',
    'myApp.dogs',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        rewriteLinks: false
    });
    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({redirectTo: '/dogs'});
}]);
