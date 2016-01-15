(function() {
  'use strict';

  angular
    .module('sghome.modules.dashboard')
    .controller('dashboardController', ['$scope', 'postsService',
      function($scope, postsService) {
        $scope.posts = [];

        function init() {
          postsService.getPostsForRent()
            .success(function(response) {
              console.log(response);
              $scope.posts.forRent = response;
            })
            .error(function(error) {
              console.log(error);
            })
        }

        init();
      }])
})();