 'use strict';

angular.module('hackdayApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-hackdayApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-hackdayApp-params')});
                }
                return response;
            }
        };
    });
