'use strict';
angular.module('MusicTrackApp')
        .controller('musicctrl', function ($scope, dataService, $http) {
            
            
            $scope.MusicTrack = {
                music: []
            };

            $scope.init = init;
          
            
            
            $scope.getMusicTrack = dataService.getMusicTrack(function (response) {
                debugger;
               
                $scope.MusicTrack.music = response.data.results;
                debugger;
            });

            function init() {
                debugger;
            }
            
            $scope.saveMusicTrack = function (todo, index) {
                dataService.saveToDos(todo);

            };
            $scope.searchTrack = function (track) {
                debugger;
                $http.get('http://104.197.128.152:8000/v1/tracks?title=' + track)
                        .then(function (response) {
                            $scope.MusicTrack.music = response.data.results;
                            debugger;
                        });
            };
        });