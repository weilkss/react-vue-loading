const path = require('path');
const shell = require('shelljs');
const nodeExternals = require('webpack-node-externals');

const env = process.env.env_build;
var build = null;

const vue = {
  entry: './src/vue.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: './lib/',
    filename: 'vue.js',
    library: 'vue',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

const react = {
  entry: './src/react.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'react.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [nodeExternals()],
  module: {
    rules: [{ test: /\.js?$/, use: 'babel-loader', exclude: /node_modules/ }]
  }
};

if (env == 'vue') {
  build = vue;
} else {
  build = react;
}

shell.cp('-R', './src/index.js', './lib');
shell.cp('-R', './src/index.ts', './lib');

module.exports = build;
