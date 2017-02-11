var app = angular.module("myDirectivesApp", []);

app.directive("myDiv", function(){
    return {
        restrict: "E",
        template: "This is My First Custom Directive"
    }
})

app.directive("hello", function(){
    return {
        restrict: "A",
        link: function(s, e, a){
            e.text("Hello Custom Directive Message " + a.org);
        }
    }
})

app.directive("myname", function(){
    return {
        restrict: "E",
        scope: {},
        template: "{{fullName}}",
        link: function(s, e, a){
            s.fullName = a.first + " " + a.last;
        }
    }
})

app.directive("namer", function(){
    return {
        restrict: "A",
        scope: {},
        template: "{{fullName}}",
        link: function(s, e, a){
            s.fullName = a.first + " " + a.last;
        }
    }
})

app.directive("cnamer", function(){
    return {
        restrict: "C",
        scope: {},
        template: "{{fullName}}",
        link: function(s, e, a){
            s.fullName = a.first + " " + a.last;
        }
    }
})















