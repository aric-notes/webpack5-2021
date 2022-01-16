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
        test: /.css$/,  // 正则，匹配将要处理的文件(filename)类型
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash].[ext]',
        }
      }
    ]
  }
}
