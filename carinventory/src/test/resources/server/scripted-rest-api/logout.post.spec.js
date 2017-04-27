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
		this.queryParams = {};
		this.setQueryParams = function(k,v) {
			this.queryParams[k] = v;
		};
	};
	
	var Response = function(){
		this.status = '';
		this.setStatus = function(statusCode) {
			this.status = statusCode;
		}
	};
	
	function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

		var un = request.queryParams.user_name;
		var lock = new Authenticate().logoff(un);
		response.setStatus(lock);
		return response;
	}
	
	
	beforeEach(function() {
		request = new Request();
		response = new Response();
	});
	
	it("should successfully logoff", function() {
		request.setQueryParams("user_name", "Mandar.Kamtekar");
		process(request, response);
		expect(response.status).toEqual(200);
    });
  });