/**
 * Created by phat on 1/16/16.
 */

(function() {
  'use strict';

  angular
    .module('sghome.modules.dashboard')
    .factory('postsService', ['$http',
      function($http) {
        return {
          getPostsForRent: getPostsForRent
        };

        function getPostsForRent() {
          return $http.get('app/modules/dashboard/data/data.json');
        }
      }])
})();