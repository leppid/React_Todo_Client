const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

module.exports = {
  entry:  './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: {
         loader: 'babel-loader',
         query: {
          presets: ['react']
        }
      }
    }, {
      test: /\.html$/,
      use: [
      {
        loader: "html-loader",
        options: { minimize: true }
      }
     ]
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    }]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: 'css/[name].css'
    })
  ]
}
