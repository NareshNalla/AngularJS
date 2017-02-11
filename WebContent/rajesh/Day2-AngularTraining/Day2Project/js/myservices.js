var m = angular.module("serviceApp", []);

m.value("appTitle", "My Angular Title");

m.controller("ServicesController", function($scope, appTitle, myFactory, EmpFactory, StudentService, myTest){
    $scope.val = appTitle;
    $scope.fact = myFactory;
    
    EmpFactory.setEmpName("Satya");
    $scope.ename = EmpFactory.getEmpName();
    
    $scope.serv = StudentService;
    StudentService.setStdName("Arun");
    $scope.sname = $scope.serv.getStdName();
    
    $scope.prov = myTest;
    //myTest.setMyString("XZ")
})

m.factory("myFactory", function(appTitle){
    return "This is My Factory Function " + appTitle;
})

m.factory("EmpFactory", function(){
    var empname = "";
    
    return {
        getEmpName: function(){
            return empname;
        },
        setEmpName: function(newval){
            empname = newval;
        }
    }
})

m.service("StudentService", function(){
    var stdname = "";
    this.getStdName = function(){
        return stdname;
    }
    this.setStdName = function(newval){
        stdname = newval;
    }
})

m.config(function(myTestProvider, orgname){
    console.log("COnfig " + orgname)
    myTestProvider.setMyString("UHG - OPTUM")
})

m.run(function(StudentService){
    console.log("Run");
})

m.provider("myTest", function(){
    console.log("My Test Provider FUNCTION");
    
    var pobj = {};
    var myString = "This is My String";
    
    pobj.setMyString = function(newval){
        myString = newval;
    }
    
    pobj.$get = function(){
        console.log("Provider GET function");
        return myString;
    }
    return pobj;
})

m.constant("orgname", "My Org Name");

























