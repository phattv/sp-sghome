/**
 * Created by phat on 1/16/16.
 */

(function() {
  'use strict';

  angular
    .module('sghome.modules.forRent', ['ui.bootstrap'])
    .config(['$stateProvider',
      function($stateProvider) {
        $stateProvider
          .state('main.forRent', {
            url: '/for-rent/:id',
            templateUrl: '/app/modules/forRent/views/forRent.html',
            controller: 'forRentController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
              label: 'For Rent'
            }
          })
      }])
})();