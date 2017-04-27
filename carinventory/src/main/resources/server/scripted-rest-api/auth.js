(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	//gs.log (gs.getUserID() +" "+ gs.getSessionID()," Login");
		var userName = request.getHeader('user_name');
		var userPassword = request.getHeader('user_password');
		var login = new Authenticate();
		res = login.login(userName,userPassword);	
	response.setBody(res.body);
	response.setStatus(res.status);
})(request, response);