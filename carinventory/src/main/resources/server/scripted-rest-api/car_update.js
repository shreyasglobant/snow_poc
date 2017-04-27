/**
 * Update quantity for the selected car model.
 * 
 * @param {RESTAPIRequest}
 *            request - http request element
 * @param {RESTAPIResponse}
 *            response - http response element
 */
(function process(/* RESTAPIRequest */request, /* RESTAPIResponse */response) {

    var spocLog = new SPOCLog();

    var tables = {
        carTable : 'u_car'
    };

    var logOptions = spocLog.getOptions(tables);
    var log = spocLog.start(request, response, logOptions);
    var user = null;

    log.info({
        source : 'car_post.js',
        message : '[function start]'
    });

    var status = 200;
    var body = {};

    try {
        var spocUser = new SPOCUser();
        var validatedUser = spocUser.validateUserLoggedIn(log, user);
        
        if(validatedUser.isUserValid){

            options = ((request || {}).headers || {})['car-sysid'];
            
            var grCar = new GlideRecord(tables.carTable);
            grCar.addQuery('sys_id', 'IN', options);
            grCar.query();

            while (grCar.next()) {
            	
            	var quantity = grCar.u_quantity;
            	if(quantity > 1){
            		grCar.u_quantity = quantity -1;
            		grCar.update();
            	}else{
            		grCar.deleteRecord();
            	}
            }
            status = 201;
            body =  {
                titleKey : 'car.update.success.title',
                messageKey : 'car.update.success.body'
            };
            
        }else{
        	status = 401;
            body =  {
                titleKey : 'car.user.authorized.title',
                messageKey : 'car.user.authorized.body'
            };
        }
        
    } catch (e) {
        status = e.status || 500;
        body = e.body || {
            titleKey : 'error.system.title',
            messageKey : 'error.system.body'
        };
        log.error({
            source : 'car_update.js',
            message : 'Error in update car service',
            exception : e
        });
    }

    response.setStatus(status);
    response.setBody(body);

    log.info({
        source : 'car_update.js',
        message : '[function end]'
    });
})(request,response);

