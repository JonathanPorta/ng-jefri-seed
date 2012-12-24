(function(){

}).call(this);

(function(){

}).call(this);

(function(){
  var controller, directive;
  controller = function($scope, appService){
    var fn;
    $scope[0] = {
      property: value
    };
    $scope[1] = fn = function(){
      appService.doSomething();
    };
  };
  controller.$inject = ['$scope', 'AppService'];
  directive = function($){
    return {
      restrict: 'E',
      template: $.template('#other'),
      replace: true,
      controller: controller
    };
  };
  angular.module('seedApp').directive('other', ['jQuery', directive]);
  angular.classmap({
    semantic: "row",
    fields: "span6 btn btn-block btn-primary",
    controls: "span6 btn btn-block"
  });
}).call(this);

(function(){

}).call(this);
