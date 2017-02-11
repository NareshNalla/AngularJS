var app = angular.module('myMenuApp',['ngSanitize', 'CtrlModule']);

app.run(function(){
    console.log("RUN Phase")
})

app.config(function(){
    console.log("CONFIG Phase")
})