(function (){
// 'use strict';
x=10;
angular.module('myFirstApp', [])
.controller('MyFirstControler', function($scope){
  $scope.name = "Astha";
  $scope.sayHello=function(){
    return "Hello Word";
  };
});

})();
