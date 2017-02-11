var app = angular.module('myMenuApp',['ngSanitize', 'CtrlModule', 'ngRoute']);

app.run(function(){
    console.log("RUN Phase")
})

app.config(function($routeProvider){
    console.log("CONFIG Phase")
    
    $routeProvider.when("/", {template: "<h3>Welcome to My Restaurant</h3>"});
    $routeProvider.when("/menucard", {templateUrl: "partials/menucard.html"});
    $routeProvider.when("/menuitems", {templateUrl: "partials/menuitems.html", controller: "MenuController"});
    $routeProvider.otherwise({template: "<h3>NO Route Matching Found..</h3>"})
})