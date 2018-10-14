'use strict';

angular.module('myApp.cats', [])

.controller('CatsCtrl', function($scope, CatsService) {
    var self = this;
    $scope.catTypes = [];
    $scope.selectedBreed = null;
    $scope.preview = null;
    $scope.loading = false;


    self.fetchCategories = function () {
        $scope.loading = true;
        CatsService.fetchCategories()
            .then(
                function (d) {
                    $scope.catTypes = d;
                    $scope.loading = false;
                },
                function (errResponse) {
                    console.error('Error while fetching the list of cat breeds');
                    $scope.loading = false;
                }
            );
    };

    self.fetchByCategory = function (category) {
        $scope.loading = true;

        CatsService.fetchByCategory(category)
            .then(
                function (d) {
                    $scope.preview = d.url;
                    $scope.loading = false;
                },
                function (errResponse) {
                    console.error('Error while fetching the list of cat breeds');
                    $scope.loading = false;
                }
            );
    };

    $scope.showPreview = function (breed) {
        $scope.selectedBreed = breed.id;
        self.fetchByCategory(breed.id);
    }
    self.fetchCategories();
});