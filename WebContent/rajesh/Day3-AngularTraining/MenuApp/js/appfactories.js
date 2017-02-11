var f = angular.module("FactModule",['ngResource']);

f.factory("MenuFactory", function($resource){
     var menuitems;
    
     var menuResource = $resource("http://localhost:2403/menuitems/:id", {"id":"@mid"}, {myupdate: {method: "PUT"}})
     
     return {
         getMenuItems: function(){
             menuitems = menuResource.query();
             return menuitems;
         },
         addMenuItem: function(newmenuitem){
             menuResource.save(newmenuitem, function(respdata){
                 console.log("Save SUccess");
                 menuitems.push(respdata);
             }, function(data, status){
                 console.log("Error WHile Saving...");
             });
         },
         deleteMenuItem: function(idx, mid) {
             menuResource.remove({"id": mid}, function(){
                 console.log("Delete Success")
                 menuitems.splice(idx, 1)
             }, function(){
                 console.log("Error while Delete");
             })
         },
         updateMenuItem: function(menuitem, idx){
            menuResource.myupdate(menuitem, function(respdata){
                console.log("Update Success")
                menuitems[idx] = respdata;
            }, function(respdata){
                console.log("Update Failed")
            }) 
         }
     }
})

f.factory("OrderFactory", function(){
    var orderedItems = [];
    
    return {
        getOrderedItems: function(){
            return orderedItems;
        },
        addOrderedItem: function(item){
            orderedItems.push(item);
        },
        deleteOrderedItem: function(idx){
            orderedItems.splice(idx, 1);
        }
    }
})
















