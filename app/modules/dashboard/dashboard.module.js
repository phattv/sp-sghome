(function () {
  'use strict';

  angular
    .module('sghome.modules.dashboard', [])
    .config(['$stateProvider',
      function ($stateProvider) {
        $stateProvider
          .state('main.dashboard', {
            url: '/',
            templateUrl: '/app/modules/dashboard/views/dashboard.html',
            controller: 'dashboardController',
            controllerAs: 'vm'
          })
      }])
})();