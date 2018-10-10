'use strict';

angular.module('myApp.dogs', ['ngRoute'])

    .controller('DogsCtrl', function ($scope, DogsService) {
        var self = this;
        $scope.dogTypes = [];
        $scope.selectedBreed = null;
        $scope.preview = null;
        $scope.loading = false;

        self.fetchAllDogs = function () {
            $scope.loading = true;
            DogsService.fetchAll()
                .then(
                    function (d) {
                        $scope.dogTypes = Object.keys(d);
                        $scope.loading = false;
                    },
                    function (errResponse) {
                        console.error('Error while fetching the list of dogs');
                        $scope.loading = false;
                    }
                );
        };

        self.fetchByBreed = function (breed) {
            $scope.loading = true;
            DogsService.fetchByBreed(breed)
                .then(
                    function (d) {
                        $scope.preview = d;
                        $scope.loading = false;
                    },
                    function (errResponse) {
                        console.error('Error while fetching the list of dogs');
                        $scope.loading = false;
                    }
                );
        };

        $scope.showPreview = function (breed) {
            $scope.selectedBreed = breed;
            self.fetchByBreed(breed);
        };

        self.fetchAllDogs();
    });