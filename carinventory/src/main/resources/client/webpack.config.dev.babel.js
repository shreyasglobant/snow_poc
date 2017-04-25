import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    pathinfo: true
  },
  debug: true,
  devtool: '#eval',
  entry: {
    bundle: path.join(__dirname,'/app/app.module.js'),
    vendor: ['angular','angular-ui-router','angular-material'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  devServer: {
    proxy: {
      '**/api/**': {
        target: 'https://dev29836.service-now.com/',
        secure: false,
        changeOrigin:true,
        logLevel : 'debug'
      }
    }
  }
});
