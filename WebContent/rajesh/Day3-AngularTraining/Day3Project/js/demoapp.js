// THis is First Module
var mod1 = angular.module("mod1", []);

// THis is a controller with out scope object
mod1.controller("SimpleController", function(){
    this.msg = "This is Simple Controller";
    this.doIt = function(){
        alert("This is DO IT Function");
    }
})

// This is second module 
var mod2 = angular.module("mod2", []);
mod2.controller("DemoController", ['$scope', function(a){
    a.message = "This is Demo Controller Message";
}])


// Document Ready function
angular.element(document).ready(function(){
    // Manual Bootstrapping process
    angular.bootstrap(document.getElementById("d1"), ["mod1"]);
    
    angular.bootstrap(document.getElementById("d2"), ['mod2']);
})