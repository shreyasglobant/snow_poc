describe('logged in user profile', function() {

	var user_name = "Mandar.Kamtekar";
	
	var status_code = 0;
	var GlideSessions = function (){
	        this.lockOutSessionsInAllNodes =  function(userName){
			  if (userName == user_name)
				return true;
			  else return false;
			
			};
	};
	function logoff(username){
	 
	    if (new GlideSessions().lockOutSessionsInAllNodes(username)){   
			status_code = 200;
		}else{
				status_code = 400;
			 }

						return status_code;
	}
it('Successful Logout', function() {
       

       var expectedResults = {
           body : {
					firstName: "Mandar",
					lastName : "Kamtekar",
					role : "admin",
					sessionId: "w3456783488dgdgdgdgd494949494245"
				},
		   status : 200
       };
	   
		var result = logoff("Mandar.Kamtekar");
		
       // {test-file:/scripted-rest-api/cast_member/login_get.js}
       
       expect(result).toEqual(expectedResults.status);
       
       
   })
})