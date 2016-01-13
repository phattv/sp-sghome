(function () {
  'use strict';

  angular
    .module('sghome.modules.layout', [])
    .config(['$stateProvider',
      function ($stateProvider) {
        $stateProvider
          .state('main', {
            abstract: true,
            templateUrl: '/app/modules/layout/views/main.html',
            controller: 'mainController'
          })
      }])
})();