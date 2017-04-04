angular.module('app', [])
.controller('homeCtrl', function($scope, homeService) {
  $scope.test = "Controller Working"
  $scope.serviceTest = homeService.test

  $scope.getTest = function(){}
})
.service('homeService', function() {
  this.test = "Service working"
  this.getUsers = function(){
    return []
  }
});  