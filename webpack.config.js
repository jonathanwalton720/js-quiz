var packageJson = require('../package.json');

module.exports = {
  entry: {
    app: '.src/index.js',
    vendor: Object.keys(packageJson.dependencies)
  },
  output: {
    filename: "./dist/[name].js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
}
