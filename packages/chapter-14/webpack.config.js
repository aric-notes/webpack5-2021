const path = require("path");
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
{
  test: /\.jpe?g$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 15 * 1024
      }
    }
  ]
}
    ]
  }
}
