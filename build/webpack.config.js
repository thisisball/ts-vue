const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  entry:'./example/test.js',
  output: {
    filename: "main.js"
  },
  resolve: {
    extensions: ['.js','.ts']
  },
  module: {
    rules:[
      {
        test:/\.tsx?$/,
        use:'ts-loader',
        exclude:/node_modules/
      }
    ]
  },
  devServer: {
    contentBase:'./dist',
    compress:false,
    host:'localhost',
    port:9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'index.html',
      inject:true
    })
  ]
};