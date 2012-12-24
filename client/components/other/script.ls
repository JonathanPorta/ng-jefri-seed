controller = !($scope, appService) ->
	$scope <<<
		property: value
		fn = !->
			appService.doSomething!

controller.$inject = <[ $scope AppService ]>

directive = ($) ->
	restrict: \E
	template: $.template \#other
	replace: true
	controller: controller

angular.module \seedApp
	.directive \other, [\jQuery, directive]

angular.classmap do
	semantic: "row"
	fields: "span6 btn btn-block btn-primary"
	controls: "span6 btn btn-block"