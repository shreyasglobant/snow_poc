/**
 * 
 * The authenticated user is registered for the submitted shift.
 * 
 * @param {RESTAPIRequest}
 *            request - http request element
 * @param {RESTAPIResponse}
 *            response - http response element
 */
(function process(/* RESTAPIRequest */request, /* RESTAPIResponse */response) {

    var wdprLog = new x_wdtpa_wdpr_share.WDPRLog();

    // TODO: Update table names
    var tables = {

    };

    var logOptions = wdprLog.getOptions(tables);
    var log = wdprLog.start(request, response, logOptions);

    log.info({
        source : 'register_post.js',
        message : '[function start]'
    });

    var status = 200;
    var body = null;

    try {

        // 401 and 403
        var wdprCrossUUtilities = new WDPRCrossUUtilities();
        var validationOptions = wdprCrossUUtilities
                .getUserValidationOptions(log);

        var wdprUser = new x_wdtpa_wdpr_share.WDPRUser();
        wdprUser.validateUserLoggedIn(log, validationOptions);

        body = [ {
            "result" : {
                "messageKey" : "shift.registration.successful.message",
                "titleKey" : "shift.registration.successful.title"
            }
        } ];

    } catch (e) {
        status = e.status || 500;
        body = e.body || {
            titleKey : 'error.system.title',
            messageKey : 'error.system.body'
        };
        log.error({
            source : 'register_post.js',
            message : 'Error in Register service',
            exception : e
        });
    }

    response.setStatus(status);
    response.setBody(body);

    log.info({
        source : 'register_post.js',
        message : '[function end]'
    });
})(request, response);
