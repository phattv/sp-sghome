(function () {
  'use strict';

  angular
    .module('sghome', [
      'sghome.modules'
    ])
    .config(['$urlRouterProvider',
      function ($urlRouterProvider) {
        $urlRouterProvider.otherwise(function ($injector) {
          var $state = $injector.get('$state');
          $state.go('main.dashboard');
        });
      }]);
})();