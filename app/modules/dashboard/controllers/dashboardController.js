(function() {
  'use strict';

  angular
    .module('sghome.modules.dashboard')
    .controller('dashboardController', ['$scope',
      function($scope) {
        $scope.title = 'sghome';
      }])
})();