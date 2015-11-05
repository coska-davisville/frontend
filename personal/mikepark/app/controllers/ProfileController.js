'use strict';

/* case study 2 */

angular.module('myApp.profile',['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider.state('profile', {
          url: "/profile",
          templateUrl: "tpls/profile.tpl.html"
        });
        
    })
    .controller('ProfileController', function(){
        
    });
    