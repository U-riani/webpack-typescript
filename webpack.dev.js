const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // or 'cheap-module-source-map'
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    hot: true,
  },
});
