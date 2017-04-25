/**
 * 
 */
var SPOCUser = Class.create();
SPOCUser.prototype = {
    type : "SPOCUser",

    initialize : function () {
    },

    validateUserLoggedIn : function (log) {
        log.info({
            source : 'spocUser.js:validateUserLoggedIn',
            message : '[function start]'
        });
        var validUser = false;
        var checkCurrentUser = gs.getUserID() || null;
        var userRecordFinal = null;

        if (checkCurrentUser !== null && gs.getSessionID() !== null) {
            var userRecord = new GlideRecord('sys_user');
            userRecord.addQuery("sys_id", checkCurrentUser);
            userRecord.addQuery("active", true);
            userRecord.addQuery("locked_out", false);
            userRecord.setLimit(1);
            userRecord.query();

            if (userRecord.next()) {
                validUser = true;
                userRecordFinal = userRecord;
            } else {
                if (!options || (options && options.shouldCheckAuthorization === true)) {
                	log.error({
                        source : 'spocUser.js:validateUserLoggedIn',
                        message : '[User not found]'
                    });
                }
            }
        } else {
        	log.error({
                source : 'spocUser.js:validateUserLoggedIn',
                message : '[bad user or session body]'
            });
        }

        log.info({
            source : 'spocUser.js:validateUserLoggedIn',
            message : '[function end]'
        });
        return {
            isUserValid : validUser,
            loggedInUserRecord : userRecordFinal
        };
    },
    
	getCurrentUser : function (log, parameters) {
	    log.info({
	        source : 'spocUser.js:getCurrentUser',
	        message : '[function start]'
	    });
	    var user = {};
	    parameters = parameters || {'user':true};
	    parameters.user = (parameters.user === undefined || parameters.user === null)? true : parameters.user;
	
	    if(parameters.user === true) {
	        if (gs.getUserID() && gs.getSessionID()) {
	            var grUser = new GlideRecord('sys_user');
	            grUser.addQuery('sys_id',gs.getUserID());
	            grUser.addQuery('active',true);
	            grUser.addQuery('locked_out',false);
	            grUser.query();
	
	            if (grUser.next()) {
	                user.grUser = grUser;
	            } else {
	                return null;
	            }
	        }    
	    }
	    	
	    log.info({
	        source : 'spocUser.js:getCurrentUser',
	        message : '[function end]'
	    });
	    return user;
	}
}