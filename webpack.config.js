// node的path模块
const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpack = require('webpack')

const pathResolve = (str) => path.resolve(__dirname, str);

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  // 出口
  output: {
    filename: "app.js",
    path: pathResolve("./dist"),
  },
  devServer: {
    contentBase: './dist',
    // 自动打开浏览器
    open: true,
    // 启用热模块替换
  hot: true
  },
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test:'/\.css$/',
        use:['"style-loader", "css-loader"']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader","postcss-loader", "sass-loader",],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
  },
};
