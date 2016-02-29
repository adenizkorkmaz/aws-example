'use strict';

angular.module('hackdayApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


