const path = require('path');

module.exports = {
  entry: {
    'custom': './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  mode: process.env.NODE_ENV,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};