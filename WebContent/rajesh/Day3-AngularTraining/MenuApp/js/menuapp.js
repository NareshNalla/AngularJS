var app = angular.module('myMenuApp',['ngSanitize', 'CtrlModule', 'ngRoute', 'ngMessages']);

app.run(function($rootScope){
    console.log("RUN Phase")
    $rootScope.isLogin = false;
})

app.config(function($routeProvider){
    console.log("CONFIG Phase")
    
    $routeProvider.when("/", {template: "<h3>Welcome to My Restaurant</h3>"});
    $routeProvider.when("/menucard", {templateUrl: "partials/menucard.html"});
    $routeProvider.when("/menuitems", {templateUrl: "partials/menuitems.html", controller: "MenuController"});
    $routeProvider.otherwise({template: "<h3>NO Route Matching Found..</h3>"});
    
    $routeProvider.when("/login", {templateUrl: "partials/login.html", controller: "LoginController"});
    $routeProvider.when("/error", {template: "<h3>Invalid Credentials</h3>"});
    $routeProvider.when("/logout", {templateUrl: "partials/logout.html"});
    
    $routeProvider.when("/signup", {templateUrl: "partials/signup.html", controller: "SignupController"})
})

app.filter("truncate", function(){
    return function(input, param){
        var result = (input.length > param)? input.substr(0, param)+"...":input;
        return result;
    }
})














