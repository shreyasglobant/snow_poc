const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  context:  path.join(__dirname,'/app'),
  module: {
    loaders: [{
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap&sourceComments'
    }, {
        test: /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
        loader: 'url-loader?limit=300'
    }, {
        test: /\.json$/,
        loader: 'json-loader'
    }, {
        test: /\.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]'
    }, {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015',
        exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Starter Theme',
      template: 'index.ejs',
      inject: 'body'
    })
  ]
}
