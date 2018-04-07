var HtmlWebpackPlugin = require('html-webpack-plugin');
var packageJson = require('./package.json');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: Object.keys(packageJson.dependencies)
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})]
}
