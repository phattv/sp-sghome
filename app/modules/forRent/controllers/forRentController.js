/**
 * Created by phat on 1/16/16.
 */
(function() {
  'use strict';

  angular
    .module('sghome.modules.forRent')
    .controller('forRentController', ['$stateParams', 'postsService',
      function($stateParams, postsService) {
        var vm = this;

        // TODO: get post with id
        postsService.getPostsForRent()
          .success(function(response) {
            _.forEach(response, function(post) {
              if (post.id == $stateParams.id) {
                vm.post = _.cloneDeep(post);
                console.log(vm.post);
              }
            })
          })

      }])
})();