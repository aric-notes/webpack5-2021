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
            loader: 'file-loader',
            options: {
              // 是否将我们的结果转化为 esModule， 即 {default: './xxx.jpg'}
              esModule: false,
              name: '[name].[hash:6].[ext]',
              outputPath: 'statics/images'
            }
          }
        ]
      }
    ]
  }
}
