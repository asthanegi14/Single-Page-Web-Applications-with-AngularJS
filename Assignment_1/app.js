(function (){
  
'use strict';
angular.module('myFirstAssignApp', [])
.controller('LunchCheckController', function($scope){
  $scope.display=function(){
    
    var text = $scope.inp;
    
    if(!text){
      $scope.answer="Please enter data first";
    }
    else{
      const ch = text.split(",");
      if(ch.length>3){
        $scope.answer="Too much!";
        // alert("Too much!");
      }
      else{
        $scope.answer="Enjoy!";
        // alert("Enjoy!");
      }
    }
  };
});
})();
