'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router','myApp.version', 'myApp.profile'])

.config(function($stateProvider, $urlRouterProvider) {
  
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  
  //
  // Now set up the states
  $stateProvider
    .state('gallery', {
      url: "/gallery",
      templateUrl: "tpls/gallery.tpl.html",
      controller: 'GalleryController'
    })   
    .state('profile.list', {
      url: "/profile.list",
      templateUrl: "tpls/profile.list.tpl.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    });
    
});