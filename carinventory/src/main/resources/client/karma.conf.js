module.exports = function (config) {
  const configuration = {
    // Base path, used to resolve all patterns.
    basePath: '',

    // if true, Karma runs tests once and exit.
    singleRun: true,

    // if true, Karma runs tests once and wait for changes.
    autoWatch: false,

    // Level of Loggin.
    logLevel: 'INFO',

    // Browsers to be started.
    browsers: [
      'PhantomJS'
    ],

    // Frameworks to be used
    frameworks: [
      'jasmine'
    ],

    // list of files/pattern to load in the browser.
    files: [
      'unit-tests/lib/angular.min.js',
      'unit-tests/lib/angular-mocks.js',
      'app/*.js',
      'unit-tests/*.spec.js'
    ],

    // Process matching files before serving to the browser
    preprocessors: {
      ['app/*.js']: [
        'webpack'
      ]
    },
    // Webpack loader, using test configuration
    webpack: require('./webpack.config.test.babel'),
    webpackMiddleware: {
      noInfo: true
    },

    // The plugins magic |o/
    plugins: [
      require('karma-phantomjs-launcher'),
      require('karma-jasmine'),
      require('karma-webpack')
    ]
  };

  config.set(configuration);
};
