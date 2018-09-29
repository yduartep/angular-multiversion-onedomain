'use strict';

App.factory('CatsService', function ($http, $q) {
    return {

        fetchCategories: function () {
            return $http.get('https://api.thecatapi.com/v1/categories')
                .then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error while fetching the list of cats');
                        return $q.reject(errResponse);
                    }
                );
        },

        fetchByCategory: function (breed) {
            // it's not a real fetch by category. Just take the first image found
            var req = {
                method: 'GET',
                url: 'https://api.thecatapi.com/v1/images/search?format=json&limit=1',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'e72cbbe8-a46f-46dc-8503-a7dc6aea1e81'
                }
            };

            return $http(req)
                .then(
                    function (response) {
                        return response.data && response.data.length > 0 ? response.data[0] : {};
                    },
                    function (errResponse) {
                        console.error('Error while fetching the list of cats');
                        return $q.reject(errResponse);
                    }
                );
        }
    };
});