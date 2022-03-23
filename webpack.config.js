const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname,"./dist"),
    filename: '[name].[contenthash].js',
    clean: true
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist"
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname,"./index.html"),
  })],
}