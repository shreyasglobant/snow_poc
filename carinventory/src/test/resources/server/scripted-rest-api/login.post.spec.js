describe("Authenticate", function() {

	var request;
	var response;
	
	/* mock input and related parameters*/

	var Authenticate = function(){
		var result = {};
		this.login = function(user_name, user_password) {
			if (user_name === "Mandar.Kamtekar" && user_password === "12345") {
				result.body = {
					firstName: "Mandar",
					lastName : "Kamtekar",
					role : "admin",
					sessionId: "w3456783488dgdgdgdgd494949494245"
				};
				result.status = 200;
			}
			else {
				result.body = {};
				result.status = 403;
			}
			return result;
		},
		
		this.logoff = function() {
			return 200;
		}
	};
	
	var Request = function(){
		this.header = {};
		this.getHeader = function(key) {
			return this.header[key];
		};
		this.setHeader = function(key, value){
			this.header[key] = value;
		};
	};
	
	var Response = function(){
		this.status = '';
		this.body = '';
		this.setStatus = function(statusCode) {
			this.status = statusCode;
		};
		this.setBody = function(htmlBody){
			this.body = htmlBody;
		};
	};
	
	function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
		var userName = request.getHeader('user_name');
		var userPassword = request.getHeader('user_password');
		var login = new Authenticate();
		res = login.login(userName,userPassword);	

		response.setBody(res.body);
		response.setStatus(res.status);
	}
	
	beforeEach(function() {
		request = new Request();
		response = new Response();
	});
	
	var expectedResult = {
		status: 200,
		body: {
			firstName: "Mandar",
			lastName : "Kamtekar",
			role : "admin",
			sessionId: "w3456783488dgdgdgdgd494949494245"
		}
	};
	
	it("should successfully login", function() {
		request.setHeader("user_name", "Mandar.Kamtekar");
		request.setHeader("user_password", "12345");
		process(request, response);
		console.log(response.body);
		expect(response.status).toEqual(expectedResult.status);
		expect(response.body).toEqual(expectedResult.body);
    });
	
	it("should show an error", function() {
		request.setHeader("user_name", "Mandar.Kamteka");
		request.setHeader("user_password", "12345");
		process(request, response);
		console.log(response.status);
		expect(response.status).toEqual(403);
		expect(response.body).toEqual({});
    });
  });