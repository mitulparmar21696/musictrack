angular.module('MusicTrackApp')
        .directive('image', function () {
            return {
                templateUrl: 'templates/image-upload.html',
                controller: 'imageController',
                replace:true
            }
        });