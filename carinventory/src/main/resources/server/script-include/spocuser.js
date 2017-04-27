/**
 * 
 */
var SPOCUser = Class.create();
SPOCUser.prototype = {
    type : "SPOCUser",

    initialize : function () {
    },

    validateUserLoggedIn : function (log, user) {
        log.info({
            source : 'spocUser.js:validateUserLoggedIn',
            message : '[function start]'
        });
        var validUser = false;
        var userRecordFinal = null;

        if (user !== null) {
            var userRecord = new GlideRecord('sys_user');
            userRecord.addQuery("sys_id", user);
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
    }
}