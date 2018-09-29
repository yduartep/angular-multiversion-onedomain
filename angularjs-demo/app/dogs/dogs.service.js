'use strict';

App.factory('DogsService', function ($http, $q) {
    return {

        fetchAll: function () {
            return $http.get('https://dog.ceo/api/breeds/list/all')
                .then(
                    function (response) {
                        if (response.data.status == 'success') {
                            return response.data.message;
                        }
                        return {};
                    },
                    function (errResponse) {
                        console.error('Error while fetching the list of dogs');
                        return $q.reject(errResponse);
                    }
                );
        },

        fetchByBreed: function (breed) {
            return $http.get('https://dog.ceo/api/breed/' + breed + '/images/random')
                .then(
                    function (response) {
                        if (response.data.status == 'success') {
                            return response.data.message;
                        }
                        return {};
                    },
                    function (errResponse) {
                        console.error('Error while fetching the list of dogs');
                        return $q.reject(errResponse);
                    }
                );
        }
    };
});