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

    log.info({
        source : 'car_get.js',
        message : '[function start]'
    });

    var status = 200;
    var body = {};

    try {
        var spocUser = new SPOCUser();
        spocUser.validateUserLoggedIn(log);
        
        options = ((request || {}).headers || {})['car-sysid'];
        
        var grCar = new GlideRecord(tables.carTable);
        grCar.addQuery('sys_id', 'IN', options);
        grCar.query();

        while (grConfig.next()) {
        	
        	var quantity = grCar.u_quantity;
        	if(quantity > 1){
        		grCar.u_quantity = quantity -1;
        		grCar.update();
        	}else{
        		grCar.deleteRecord();
        	}
        }
        status = 200;
        body =  {
            titleKey : 'car.quantity.update',
            messageKey : 'car quantity succesfully updated.'
        };
    } catch (e) {
        status = e.status || 500;
        body = e.body || {
            titleKey : 'error.system.title',
            messageKey : 'error.system.body'
        };
        log.error({
            source : 'config_get.js',
            message : 'Error in Config service',
            exception : e
        });
    }

    response.setStatus(status);
    response.setBody(body);

    log.info({
        source : 'config_get.js',
        message : '[function end]'
    });
})(request, response);

