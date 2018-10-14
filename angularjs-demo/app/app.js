'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('myApp', [
    'ui.router',
    'environment',
    'myApp.dogs',
    'myApp.help',
    'myApp.version'
])
    .config(function ($stateProvider, envServiceProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/dogs');

        // Now set up the states
        $stateProvider
            .state('dogs', {
                url: "/dogs",
                templateUrl: "dogs/dogs.html",
                controller: 'DogsCtrl'
            })
            .state('cats', {
                url: "/cats",
                templateUrl: "cats/cats.html",
                controller: 'CatsCtrl'
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

        envServiceProvider.config({
            domains: {
                development: ['localhost', 'example.dev.local'],
                production: ['example.com', '*.example.com', 'example.dev.prod']
            },
            vars: {
                development: {
                    hostByRequest: {
                        dogs: 'http://localhost:8000',
                        cats: 'http://localhost:4200',
                        help: 'http://localhost:8000'
                    },
                    routesToRedirect: ['/cats']
                },
                production: {
                    hostByRequest: {
                        dogs: 'www.example.com',
                        cats: 'www.example.com',
                        help: 'www.example.com'
                    },
                    routesToRedirect: ['/cats']
                },
                defaults: {
                    hostByRequest: {
                        dogs: 'http://localhost:8000',
                        cats: 'http://localhost:4200',
                        help: 'http://localhost:8000'
                    },
                    routesToRedirect: ['/cats']
                }
            }
        });

        // run the environment check, so the comprobation is made
        // before controllers and services are built
        envServiceProvider.check();

    })
    .run(function ($rootScope, envService) {
        console.log('Current environment: ' + envService.get());
        // redirect to the new module the requests already migrated
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var route = toState.url.substring(1);
            var hostByRequest = envService.read('hostByRequest')[route];
            var routesToRedirect = envService.read('routesToRedirect');

            if (routesToRedirect.includes(toState.url)) {
                window.location = hostByRequest + toState.url;
            }
        });
    });
