const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/css-badge.scss'],
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [{
      test: /\.(scss)$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }]
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin({
      filename: './src/css-badge.css'
    })
  ]
};