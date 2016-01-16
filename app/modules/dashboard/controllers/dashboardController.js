(function () {
  'use strict';

  angular
    .module('sghome.modules.dashboard')
    .controller('dashboardController', ['postsService', '$state',
      function (postsService, $state) {
        var vm = this;
        vm.posts = [];
        vm.viewPostDetail = viewPostDetail;

        function init() {
          postsService.getPostsForRent()
            .success(function (response) {
              console.log(response);
              vm.posts.forRent = response;
            })
            .error(function (error) {
              console.log(error);
            })
        }

        function viewPostDetail(post) {
          $state.go('main.forRent', {
            id: post.id
          })
        }

        init();
      }])
})();