var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    './client'
  ],
  output: {
    path: './client',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.es6$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
