'use strict';

/* Case study 1 */
myApp

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: "/home",
      templateUrl: "tpls/home.tpl.html",
      controller: 'HomeController'
    });
})    

.controller('HomeController', function(){
	
});