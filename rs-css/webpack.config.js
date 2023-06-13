const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin')

const conf = {
  entry: path.resolve(__dirname, './src/index'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  mode: 'development',
  // devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, './dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.ts$/i,
        use: 'ts-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name][ext]',
        },
      },
      {
        test: /\.mp3$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/audio/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      // favicon: 'src/assets/icons/favicon.ico',
      template: './src/index.html',
      filename: './index.html',
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/assets/images/', to: 'assets/images/' }],
      patterns: [{ from: 'src/assets/icons/', to: 'assets/icons/' }],
    }),
    new ESLintPlugin({
      extensions: 'ts',
      fix: true
    })
  ],
  performance: {
    hints: false,
  },
};

// module.exports = conf;
module.exports = (env, options) => {
  const isProd = options.mode === 'production';
  conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
  return conf;
};