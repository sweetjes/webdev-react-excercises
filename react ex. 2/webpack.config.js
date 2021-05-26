const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  devServer: {
    open: true
  },
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin({})
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      hash: false,
      template: './index.html',
      filename: 'index.html',
      path: path.resolve(__dirname, 'build'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: { compact: true },
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
        ]
      }
    ]
  }
}