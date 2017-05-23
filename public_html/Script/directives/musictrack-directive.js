angular.module('MusicTrackApp')
        .directive('music', function () {
            return {
                templateUrl: 'templates/musictrack.html',
                controller: 'musicctrl',
                replace:true
            }
        });