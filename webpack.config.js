var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'bundle.css' // scss轉css後另存的目標檔名
});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './index.jsx',
    vendors: [
      'babel-polyfill',
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: '/assets/',
    path: path.join(__dirname, 'assets')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2016']
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 25000
        }
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader?url=false"
        }]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: [{
            loader: "css-loader?url=false"
          }, {
            loader: "sass-loader?url=false"
          }]
        })
      }
    ]
  },
  plugins: [
    extractPlugin // 把extract過的loader轉存成css檔
  ]
};