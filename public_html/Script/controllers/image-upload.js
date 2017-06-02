'use strict';
angular.module('MusicTrackApp')
        .controller('imageController', function ($scope,dataService) {

            //====================================================================================//
        // Variable Declaration
        //====================================================================================//
        $scope.companyModifyData = {
            item: {},
            upload: [],
            newLogo: null,
            companyLogo: 'images/logo.png',
            DeleteReference: null,
            isVisible: false,
            isReload: false
        };

        //====================================================================================//
        // Function Declaration
        //====================================================================================//

        $scope.init = init;
      
        

        //====================================================================================//
        // Function Implementation
        //====================================================================================//

        //init
        function init() {


        }


        //function for upload logo click
        function uploadLogo() {

            if ($scope.companyModifyData.DeleteReference != null || $scope.companyModifyData.DeleteReference != undefined)
            {
                $scope.companyModifyData.newLogo.upload = Upload.upload({
                    url: dataService.getBaseUrl() + 'Upload/Logo',
                    data: {file: $scope.companyModifyData.newLogo, refrence: $scope.companyModifyData.NewReference},
                });
                
            } else {

                $scope.companyModifyData.newLogo.upload = Upload.upload({
                    url: dataService.getBaseUrl() + 'Upload/Logo',
                    data: {token: localStorage.getItem('AccessToken'), file: $scope.companyModifyData.newLogo, refrence: $scope.companyModifyData.NewReference},
                });

            }


            $scope.companyModifyData.newLogo.upload.then(function (response) {
                $timeout(function () {
                    onSuccess(false);
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                // Math.min is to fix IE which reports 200% sometimes
                $scope.companyModifyData.newLogo.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    
           

          
        });