'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ui.router',
  
  'myApp.version'
])

.config(function($stateProvider, $urlRouterProvider) {
  
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "tpls/home.tpl.html",
      controller: 'HomeController'
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "tpls/profile.tpl.html"
    })
    .state('profile.list', {
      url: "/profile.list",
      templateUrl: "tpls/profile.list.tpl.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    });
    
});