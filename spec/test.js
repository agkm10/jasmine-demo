describe('homeCtrl', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.getTest', function() {
    it('is defined', function() {
      var $scope = {};
      var controller = $controller('homeCtrl', { $scope: $scope });
      expect($scope.getTest).toBeDefined();
      // expect($scope.getTest()).toBeTruthy();
    });
  });
});

describe('homeService', function() {
    var homeService;
    beforeEach(angular.mock.module('app'))

    beforeEach(inject(_homeService_ => {
        homeService = _homeService_
    }))
    describe('getUsers', () => {
        it('getUsers should exist', () => {
            expect(homeService.getUsers).toBeDefined()
        })

        it('should return an empty array', () => {
            expect(homeService.getUsers()).toEqual([])
            
        })
    })    
})  
