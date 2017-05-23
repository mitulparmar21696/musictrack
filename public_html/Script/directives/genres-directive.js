angular.module('MusicTrackApp')
        .directive('genre', function () {
            return {
                templateUrl: 'templates/genre.html',
                controller: 'genrectrl',
                replace:true
            }
        });