describe('logged in user profile', function() {

	var user_name = "Mandar.Kamtekar";
	var user_password = '12345';
	var body = {};
	var status_code = 200;
	var GlideUser = function (){
	        this.authenticate =  function(userName,userPassword){
			  if (userName == user_name && userPassword == user_password)
				return true;
			  else return false;
			
			};
	};
	function Login(username, password){
	 
	    if (new GlideUser().authenticate(username,password)){   
			body = {
					firstName: "Mandar",
					lastName : "Kamtekar",
					role : "admin",
					sessionId: "w3456783488dgdgdgdgd494949494245"
				}
			
		}else{
				status_code = 401;
			 }
			var res = {
		             body : body,
					 status : status_code
				  }	
						return res;
	}

		it('Successful Login', function() {
       

			var expectedResults = {
				body : {
						firstName: "Mandar",
					lastName : "Kamtekar",
					role : "admin",
					sessionId: "w3456783488dgdgdgdgd494949494245"
				},
		   status : 200
       };
	   
		var result = Login("Mandar.Kamtekar","12345");
		
       // {test-file:/scripted-rest-api/cast_member/login_get.js}
       
       expect(result).toEqual(expectedResults);
       
       
   })
})