/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var civTablet = angular.module('civTablet', ['ngRoute']);// add modules to [] if necesserary

// Route
civTablet.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'app/templates/smile.html',
        controller: 'smileController'
    }).
    when('/smile', {
        templateUrl: 'app/templates/smile.html',
        controller: 'smileController'
    }).
    when('/rate', {
        templateUrl: 'app/templates/rate.html',
        controller: 'rateController'
    }).
    when('/admopt', {
        templateUrl: 'app/templates/admopt.html',
        controller: 'admoptController'
    }).
    when('/timeline', {
        templateUrl: 'app/templates/timeline.html',
        controller: 'timelineController'
    });
});

// SERVICES

civTablet.service('placeService', function(){
    this.name = 'Nom du lieu'
});

// Smile Page
civTablet.controller('smileController', ['$scope', 'placeService',function($scope, placeService){
    $scope.place = placeService;
    var smiley = new Smiley(document.getElementById('smile_0'));
}]);


// Rate Page
civTablet.controller('rateController', ['$scope', function($scope){
    $scope.criteria = [];    
        
    $scope.watch('criteria', function(){
        //
    });
}]);

// Timeline Page
civTablet.controller('timelineController', ['$scope', function($scope){
    
}]);

// Admopt Page
civTablet.controller('admoptController', ['$scope', function($scope){
    
}]);
