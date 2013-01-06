Short = ->
	(id)->
		"(#{id.substring 0, 8})"

angular.module \seedApp
	.filter \shortId, Short

