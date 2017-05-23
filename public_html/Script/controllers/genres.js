'use strict';
angular.module('MusicTrackApp')
        .controller('genrectrl', function ($scope, dataService, $http) {

            $scope.genres = {
                results: [],

            };
            $scope.genre = {
                postgenre: [],

            };

            $scope.getGenres = dataService.getGenres(function (response) {
                debugger;
               
                $scope.genres.results = response.data.results;
                debugger;
            });

            $scope.saveGenres = function (genre) {
                debugger;
                $http.post('http://104.197.128.152:8000/v1/genres', genre)
                        .then(function (response) {
                            debugger;
                           
                            $scope.genres.results.push(response.data);
                        });
            };

            $scope.editGenres = function (data) {
                debugger;
                $http.get('http://104.197.128.152:8000/v1/genres/' + data.id)
                        .then(function (response) {
                            debugger;
                            $('#genres').modal('show');
                            $scope.genre.postgenre = response.data;


                        });
            };
        });