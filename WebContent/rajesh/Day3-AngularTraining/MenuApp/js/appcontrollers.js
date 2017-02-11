var c = angular.module("CtrlModule",['SvcModule']);

c.config(function(){
    console.log("Ctrl Module CONFIG")
})

c.run(function(){
    console.log("Ctrl Module RUN")
})

c.controller("MenuController", function($scope, MenuService, OrderService){
    $scope.itemsList = MenuService.getAllMenuItems();
    
    $scope.placeOrder = function(menuitem){
        var orderedItem = {"name":menuitem.name, "price":menuitem.price, "qty":1}
        OrderService.addOrderedItem(orderedItem);
    }
    var temp;
    
    $scope.save = function(){
        //console.log($scope.newmenuitem.id);
        if($scope.newmenuitem.id == undefined) {
            MenuService.addMenuItem($scope.newmenuitem);    
        } else {
            MenuService.updateMenuItem($scope.newmenuitem, temp);
        }
        
        $scope.newmenuitem = {}
    }
    
    $scope.remove = function(idx, mid) {
        MenuService.deleteMenuItem(idx, mid);
    }
    
    $scope.edit = function(menuitem, idx){
        $scope.newmenuitem =  angular.copy(menuitem);
        temp = idx;
    }
})

c.controller("OrderController", function($scope, OrderService){
    $scope.orderedItems = OrderService.getAllOrderedItems();
    
    $scope.cancelOrder = function(idx){
        OrderService.deleteOrderedItem(idx);
    }
    
    $scope.totalAmount = function(){
        return OrderService.totalAmount();
    }
})

c.controller("MainController", function($scope, $location, $rootScope){
    $scope.$on("$routeChangeSuccess", function(){
        console.log("Route Change Success " + $location.path());
        if($location.path() == "/logout"){
            $rootScope.isLogin = false;
        }
    })
    
    $scope.$on("$routeChangeStart", function(){
        if(!$rootScope.isLogin){
            if($location.path() == "/menuitems") {
                //$location.path("/login")
            }
        }
    })
})

c.controller("LoginController", function($scope, $location, $rootScope){
    $scope.login = function(){
        if($scope.login.username == "admin"){
            $rootScope.isLogin = true;
            $location.path("/menuitems")
        } else {
            $location.path("/error")
        }
    }
})

c.controller("SignupController", function($scope){
    $scope.stateList = [{"stateId":1, "Name":"Telangana"}, {"stateId":2, "Name": "AP"}]
    
    $scope.$watch("user.state", function(newval, oldval){
        console.log("Old Value: " + oldval + " New Value: " + newval)
        
        if(newval == 1) {
            $scope.cityList = [{"cityId":101, "Name":"Hyderabad"}, {"cityId":102, "Name":"Warangal"}]
        }else if(newval == 2) {
            $scope.cityList = [{"cityId":201, "Name":"Vijayawada"}, {"cityId":202, "Name":"Guntur"}]
        }
    })
})
















