// Declare app level module which depends on filters, and services
angular.module('DataDogDemo', [])
    .controller('DataDogDemoController', function ($scope, DataDogDemoService) {

        DataDogDemoService.incrementPageViewsCount().then(function (res) {
            if (res.status == 200) {
                console.log("page views incremented");
                swal("Page Views incremented", "", "success");
            } else {
                console.log("error");
            }

        });

        $scope.login = function () {
            console.log("login clicked");
            DataDogDemoService.incrementLoginCount().then(function (res) {
                console.log(res);
                if (res.status == 200) {
                    swal("login count incremented", "", "success");
                } else {
                    console.log("error");
                }
            });
        }
    });