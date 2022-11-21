const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: 'development',
    entry: {
      main: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@assets': path.resolve(__dirname, 'src/assets/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.html$/i,
          use: { loader: 'html-loader' },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name]-[hash][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name]-[hash][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: './[name].css',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: './dist',
        watch: true,
      },
      watchFiles: path.join(__dirname, './**'),
      compress: true,
      historyApiFallback: true,
      port: 3000,
      open: true,
    },
    optimization: {
      runtimeChunk: 'single',
    },
  };
};
