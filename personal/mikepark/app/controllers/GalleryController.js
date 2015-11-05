'use strict';

/* Case study 1 */
myApp.controller('GalleryController', ['$scope', '$state', function($scope, $state){
	
    
    
    $scope.goHome = function(){
        
        $state.go('home') ;       
    };
    
}]);