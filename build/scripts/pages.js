(function(){

}).call(this);

(function(){

}).call(this);

(function(){
  var controller;
  controller = function($scope, appService){
    var fn;
    $scope[0] = {
      property: value
    };
    $scope[1] = fn = function(){
      appService.doSomething();
    };
  };
  angular.module('seedApp').controller('task', ['$scope', 'AppService', controller]);
  angular.classmap({
    semantic: "row",
    fields: "span6 btn btn-block btn-primary",
    controls: "span6 btn btn-block"
  });
}).call(this);

(function(){

}).call(this);
