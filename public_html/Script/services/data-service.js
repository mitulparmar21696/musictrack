'use strict';
angular.module('MusicTrackApp')

        .service('dataService', function ($http) {
            
            this.getMusicTrack = function (callback) {
                $http.get('http://104.197.128.152:8000/v1/tracks').
                        then(callback);
            };
            this.getGenres = function (callback) {
                $http.get('http://104.197.128.152:8000/v1/genres').
                        then(callback);
            };

            this.saveMusicTrack = function (todo) {
                console.log("The " + todo.name + ' saved');
            };
            
        });