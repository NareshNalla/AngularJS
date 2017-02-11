describe("Controller Test", function(){
    
    var scope;
    
    beforeEach(angular.mock.module("myApp"));
    
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        $controller("testCtrl", {$scope: scope})
    }))
    
    it("should define scope variable", function(){
        expect(scope.counter).toBeDefined();
    })
    
    it("couter is initialized with zero", function(){
        expect(scope.counter).toEqual(0);
    })
    
    it("Increment Function", function(){
        scope.incrementCounter();
        expect(scope.counter).toEqual(1);
    })
})