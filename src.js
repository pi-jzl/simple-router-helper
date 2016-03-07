(function() {
  'use strict';

  angular
    .module('router-helper', ['ui.router'])
    .provider('RouterHelper', RouterHelperProvider);

  RouterHelperProvider.$inject = ['$locationProvider', '$stateProvider'];
  /* @ngInject */
  function RouterHelperProvider($locationProvider, $stateProvider) {
    /* jshint validthis:true */
    this.$get = RouterHelper;

    //$locationProvider.html5Mode(true);

    RouterHelper.$inject = ['$state'];
    /* @ngInject */
    function RouterHelper($state) {

      var service = {
        configureStates: configureStates,
        getStates: $state.get
      };

      return service;

      ///////////////

      function configureStates(states) {
        states.forEach(function(state) {
          $stateProvider.state(state.state, state.config);
        });

      }

    }
  }
})();