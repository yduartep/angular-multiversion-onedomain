'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('myApp', [
    'ui.router',
    'myApp.dogs',
    'myApp.help',
    'myApp.version'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/dogs');

    // Now set up the states
    $stateProvider
        .state('dogs', {
            url: "/dogs",
            templateUrl: "dogs/dogs.html",
            controller: 'DogsCtrl'
        })
        .state('help', {
            url: "/help",
            templateUrl: "help/help.html",
            controller: 'HelpCtrl'
        });

    $locationProvider.html5Mode({
        enabled: true,
        rewriteLinks: false,
        requireBase: true
    });
    $locationProvider.hashPrefix('');
});
