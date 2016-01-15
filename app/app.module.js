(function () {
  'use strict';

  angular
    .module('sghome', [
      'sghome.modules'
    ])
    .config(['$urlRouterProvider', '$locationProvider',
      function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise(function ($injector) {
          var $state = $injector.get('$state');
          $state.go('main.dashboard');
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
      }]);
})();