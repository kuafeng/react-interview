const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
      host: '127.0.0.1',
      port: 3000,
      hot: true
  },
  entry: './src/index.js',
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            require.resolve('@babel/preset-react'),
            [require.resolve('@babel/preset-env'), {
              modules: false
            }]
          ],
          cacheDirectory: true
        }
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
};