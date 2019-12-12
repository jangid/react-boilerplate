const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
	test: /\.(js|jsx)$/,
	loader: 'babel-loader',
	exclude: /(node_modules|bower_components)/,
	options: { presets: ["@babel/env"] }
      },
      {
	test: /\.css$/,
	use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
