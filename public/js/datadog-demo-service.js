'use strict';

angular.module('DataDogDemo')
    .factory('DataDogDemoService', function($http) {
        return {
            incrementPageViewsCount: function () {
                return $http.post("/incrementPageViewsCount")
                    .then(function (res) {
                        return res;
                    }, function (err) {
                        return err;
                    });
            },

            incrementLoginCount: function () {
                return $http.post("/incrementLoginCount")
                    .then(function (res) {
                        return res;
                    }, function (err) {
                        return err;
                    });
            }
        }
    });