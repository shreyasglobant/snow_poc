/**
 * No-arg constructor for the class.  However, before the log can be used, it must first be started.  See example below.

 * 
 * @class
 * @memberof global
 * @classdesc Shared logging class for use by all server side code.
 * @example
 * var log = new x_wdtpa_wdpr_share.WDPRLog().start(request, response, options);
 * log.debug('foo');
 */
var SPOCLog = Class.create();
SPOCLog.prototype = {
    initialize : function() {
    },

    /**
     * Returns the mapping of log levels to their respective value.
     * 
     * @return {Map<string, integer>} Mapping from log levels to their respective value.
     */
    getLevelValues : function() {
        return {
            'none' : 1,
            'error' : 2,
            'warn' : 3,
            'info' : 4,
            'debug' : 5
        };
    },


    /**
     * Formats the given string with the given parameters. Parameters must be surrounded by curly braces with the index
     * of the arg in the middle. Curly braces can be escaped by doubling them.
     * 
     * In general, this function should not be called by external users.  Instead, it is used indirectly by passing
     * args to the {@link WDPRLogEmitter}'s functions.
     * 
     * 
     * An example of how the string would be formated:
     * ```
     * new x_wdtpa_wdpr_share.WDPRLog().format('{0} {{0}} {{{0}}} {1}', ['foo', 'bar']); // 'foo {0} {foo} bar'
     * ```
     * 
     * @param {string}
     *            str - The string to format.
     * @param {Array<string>}
     *            msgArgs - The arguments to format into the string.
     * @return {string} The updated string.
     */
    format : function(str, msgArgs) {
        var formatted = str;
        msgArgs = msgArgs || [];

        try {
            formatted = str.replace(/\{\{|\}\}|\{(\d+)\}/g, function(token, index) {
                var result = null;
                if (token === '{{') {
                    result = "{";
                } else if (token === '}}') {
                    result = '}';
                } else {
                    result = msgArgs[index - 0];
                }

                if (typeof result === 'undefined') {
                    result = token;
                }

                return result;
            });
        } catch (e) {
            // never crash w/in the logger...
            formatted = e.toString();
        }

        return formatted;
    },

    /**
     * Starts a log emitter by creating a {SPOCLogEmitter} object with the given request, and response.
     * 
     * @param {RESTAPIRequest} request - The RESTAPIRequest for the session
     * @param {RESTAPIResponse} response - The RESTAPIResponse for the session
     * @param {?WDPRLogOptions} options - The optional options for the logger.
     * 
     * @return {WDPRLogEmitter} An emitter to use to log events.
     */
    start : function(request, response, options) {
        options = options || {};
        
        var self = this;
        var noOpLog = {
            debug : function() {
            },
            info : function() {
            },
            warn : function() {
            },
            error : function() {
            }
        };

        var requestHeaders = ((request || {}).headers || {});
        var sessionId = requestHeaders['x-session-id'] || 'UNKNOWN';
        var conversationId = requestHeaders['x-conversation-id'] || 'UNKNOWN';
        var responseLogEnabled = options.debugMode === true && requestHeaders['x-debug-log-enable-response'] === 'true';

        var levelOverride = null;

        // Only allow the level to be overridden when the server's debug flag is
        // set.
        if (options.debugMode === true) {
            levelOverride = requestHeaders['x-debug-log-level'] || levelOverride;
        }

        var json = new global.JSON();
        var levelValues = this.getLevelValues();
        var level = 0;

        if (options.level) {
            level = levelValues[options.level] || 0;
        }
        
        if (levelOverride) {
            level = levelValues[levelOverride] || 0;
        }
        if (level === 0) {
            level = levelValues['error'];
        }
        var logger = {};
        var responseHeader = [];

        var log = function(levelName, logObj, gsLogFunc) {
            var formatted = logObj.message && logObj.args ? self.format(logObj.message, logObj.args) : logObj.message;

            var entry = {
                level : levelName,
                source : logObj.source,
                message : formatted
            };

            if (logObj.exception) {
                var exception = {};

                // Check to see if this is a "real" exception, or one we threw.
                // A real exception has a stack trace and
                // one we throw manually doesn't.
                if (logObj.exception.stack) {
                    exception.stack = logObj.exception.stack;
                    exception.message = logObj.exception.toString();
                } else {
                    exception.message = json.encode(logObj.exception);
                }

                entry.exception = exception;
            }

            if (responseLogEnabled) {
                responseHeader.push(entry);

                // This is really awful from a performance perspective, but
                // because it has to be manually enabled for
                // the session and enabled by the server's config, it's better
                // than the alternative that would require
                // the callers to call a "stop" function to attach the header
                // exactly once.
                response.setHeader('x-debug-log', json.encode(responseHeader));
            }

            var gsLogEntry = {
                source : entry.source,
                message : entry.message,
                sessionId : sessionId,
                conversationId : conversationId
            };
            if (entry.exception) {
                gsLogEntry.exception = entry.exception;
            }
            gsLogFunc(json.encode(gsLogEntry));
        };

        var noOp = function() {
        };

        logger.error = level < levelValues.error ? noOp : function(message, msgArgs, e) {
            log('error', message, gs.error, e);
        };
        logger.warn = level < levelValues.warn ? noOp : function(message, msgArgs) {
            log('warn', message, gs.warn);
        };
        logger.info = level < levelValues.info ? noOp : function(message, msgArgs) {
            log('info', message, gs.info);
        };
        logger.debug = level < levelValues.debug ? noOp : function(message, msgArgs) {
            log('debug', message, gs.debug);
        };

        return logger;
    },
    
    /**
     * Returns the options that the logger needs to check if the debug is enabled and the level of the debug.
     * 
     * @param {object} tables - the object which contains the names of the tables to be requested.
     *
     * @return {object} - The options to be used by the logger.
     */
    getOptions : function (tables) {
        
        var debugMode = false;
        var level = 'error';

        var options = {  
        };
        
        try {
            
            var featuresTable = ((tables || {}).featuresTable) || '';

            if (featuresTable !== '') {
                
                var grFeatures = new GlideRecord(featuresTable);

                if (grFeatures.get('u_key','debug')) {                    
                    debugMode = grFeatures.u_value;
                }

            }
            
            var configTable = ((tables || {}).configTable) || '';
            if (configTable !== '') {
                var grConfig = new GlideRecord(configTable);
                if (grConfig.get('u_key','log.level')) {
                    level = grConfig.u_value;
                }
            }

        } catch (e) {
            debugMode = false;
            level = 'error';
        }
        
        options.debugMode = debugMode;
        options.level = level;
        
        return options;
    },

    type : 'SPOCLog'
};