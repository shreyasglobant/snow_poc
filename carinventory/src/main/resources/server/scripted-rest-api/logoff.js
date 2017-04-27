(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	
	
	var un = request.queryParams.user_name;
	var lock = new Authenticate().logoff(un);
	
	
	response.setStatus(lock);
	
	
})(request, response);