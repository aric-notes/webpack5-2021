const path = require("path");
module.exports = {
  mode: "development",
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'assets/[name].[hash:5].[ext]'
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        type: 'asset',
        generator: {
          filename: 'images/[name].[hash:5].[ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 15 * 1024
          }
        }
      }
    ]
  }
}
