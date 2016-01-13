(function() {
  'use strict';

  angular
    .module('sghome.modules.layout')
    .controller('mainController', ['$scope',
      function($scope) {
        $scope.title = 'dashboard';
      }])
})();