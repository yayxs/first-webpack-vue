"use strict";
// webpack 的配置其实是一个 Node 的脚本，这个脚本对外暴露一个配置对象，
// webpack 通过这个对象来读取相关的一些配置。
const path = require("path");

module.exports = {
  mode: "development", // 指定构建模式
  entry: "./src/index.js",
  context: path.resolve(__dirname),
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // 开发服务器启动路径
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 指定构建生成文件所在路径
    filename: "bundle.js",
    publicPath: "pathOrUrlWhenProductionBuild",
  },
  module: {
    rules: [],
  },
  resolve: {},
  devtool: "source-map",
  plugins: [],
};
