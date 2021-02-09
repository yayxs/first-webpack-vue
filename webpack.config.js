// webpack 的配置其实是一个 Node 的脚本，这个脚本对外暴露一个配置对象，
// webpack 通过这个对象来读取相关的一些配置。
const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // 指定构建模式 development production none
  context: path.resolve(__dirname), // 默认使用当前的目录
  entry: {
    main: './src/index.js', // main 为 entry 的名称
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 开发服务器启动路径
  },
  output: {
    path: path.join(__dirname, '/dist/[hash]'), // 指定构建生成文件所在路径
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        include: [path.resolve(__dirname, 'src')],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src'), // 指定哪些路径下的文件需要经过 loader 处理
        ],
        use: {
          loader: 'babel-loader', // babel-loader 可以使用 babel 来将 ES6 代码转译为浏览器可以执行的的 ES5 代码
          options: {},
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {},
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css', // 这里也可以使用 [hash]
    }),
    // new CopyPlugin([{ from: 'src/public', to: 'public' }]),
  ],
};
