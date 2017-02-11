var s = angular.module("SvcModule",['FactModule']);

s.service("MenuService", function(MenuFactory){
    this.getAllMenuItems = function(){
        return MenuFactory.getMenuItems();
    }
    
    this.addMenuItem = function(newmenuitem){
        MenuFactory.addMenuItem(newmenuitem);
    }
    
    this.deleteMenuItem = function(idx, mid) {
        MenuFactory.deleteMenuItem(idx, mid);
    }
    
    this.updateMenuItem = function(menuitem, idx){
        MenuFactory.updateMenuItem(menuitem, idx);
    }
})

s.service("OrderService", function(OrderFactory){
    this.getAllOrderedItems = function(){
        return OrderFactory.getOrderedItems();
    }
    
    this.addOrderedItem = function(item){
        OrderFactory.addOrderedItem(item);
    }
    
    this.deleteOrderedItem = function(idx) {
        OrderFactory.deleteOrderedItem(idx);
    }
    
    this.totalAmount = function(){
        var tot = 0;
        angular.forEach(this.getAllOrderedItems(), function(c){
            tot += (c.price * c.qty);
        })
        return tot;
    }
})