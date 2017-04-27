describe("SPOCUser.validateLoggedInUser", function(){
	var Mock = function () {
    };

    var Class = {
        create: function () {
            return Mock;
        }
    };
	
	var log = {
            info: function () {
            }
        };
	
	var GlideRecord = {
		addQuery: function(){
			
		},
		query: function (){
			
		},
		next : function(){
			
		},
		u_quantity : function(){
			return 1;
		}
	};
	
	// {test-file:/script-include/spocUser.js}
    
    it("Logged in user invalid", function () {
        testParameters = { user:true };
        userId = 'USERNOTEXIST';
                   
        var result = new SPOCUser().validateUserLoggedIn(log);
        
        var expectedResult = {
                isUserValid : false,
                loggedInUserRecord : null
            }

        expect(result).toEqual(expectedResult);
    });
});