(function() {
  'use strict';

  angular
    .module('sghome.modules', [
      'ui.router',

      'sghome.modules.layout',
      'sghome.modules.dashboard'
    ])
})();