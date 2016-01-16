(function() {
  'use strict';

  angular
    .module('sghome.modules', [
      'ui.router',
      'ncy-angular-breadcrumb',

      'sghome.modules.layout',
      'sghome.modules.dashboard',
      'sghome.modules.forRent'
    ])
})();