var c = angular.module("CtrlModule",[]);

c.config(function(){
    console.log("Ctrl Module CONFIG")
})

c.run(function($rootScope){
    console.log("Ctrl Module RUN")
    $rootScope.orderedItems = [];
})

c.controller("MenuController", function($scope, $rootScope){
    console.log("This is Menu Controller")
    /*$scope.menuitem = {"code":"VG101", "name":"Dosa", "price":70, "description": "Plain Dosa"}*/
    var menuitems = [{"code":"VG101", "name":"Dosa", "price":70, "description": "Plain Dosa"},
        {"code":"NVG201", "name":"Chicken Burger", "price":370, "description": "Fried Chicken Zinger Burger"},
        {"code":"VG102", "name":"Button Idly", "price":130, "description": "Small Button Idly"}, {"code":"VG103", "name":"Paneer Pakoda", "price":390, "description": "Paneer Pakoda"}           
                    ]
    $scope.itemsList = menuitems;
    
    $scope.placeOrder = function(menuitem){
        var orderedItem = {"name":menuitem.name, "price":menuitem.price, "qty":1}
        $rootScope.orderedItems.push(orderedItem);
    }
})

c.controller("OrderController", function($scope, $rootScope){
    //$scope.orderedItems = [];
    $scope.cancelOrder = function(idx){
        $rootScope.orderedItems.splice(idx, 1);
    }
    
    $scope.totalAmount = function(){
        var tot = 0;
        angular.forEach($rootScope.orderedItems, function(c){
            tot += (c.price * c.qty);
        })
        return tot;
    }
})









