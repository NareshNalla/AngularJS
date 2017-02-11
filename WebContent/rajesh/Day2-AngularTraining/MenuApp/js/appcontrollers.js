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







