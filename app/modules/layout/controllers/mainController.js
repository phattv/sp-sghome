(function() {
  'use strict';

  angular
    .module('sghome.modules.layout')
    .controller('mainController', ['$anchorScroll', '$location',
      function($anchorScroll, $location) {
        var vm = this;
        vm.gotoSection = gotoSection;

        function gotoSection(section) {
          $location.hash(section);
          $anchorScroll()
        }
      }])
})();