Short = ->
	(id)->
		"(#{id.substring 0, 8})"

angular.module \AppModule
	.filter \shortId, Short

