(function(){
  var Short;
  Short = function(){
    return function(id){
      return "(" + id.substring(0, 8) + ")";
    };
  };
  angular.module('AppModule').filter('shortId', Short);
}).call(this);
