'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('myApp', [
    'ngRoute',
    'myApp.dogs',
    'myApp.cats',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({redirectTo: '/dogs'});
}]);
