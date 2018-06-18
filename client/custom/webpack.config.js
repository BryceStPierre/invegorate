const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ENV = process.env.NODE_ENV;

module.exports = {
  entry: {
    'custom': './src/index.js'
  },
  devtool: ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  mode: ENV,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};