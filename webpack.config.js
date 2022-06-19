const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const rulesForJs = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-env',
        { targets: { node: '10.0.0' } },
      ],
      [
        '@babel/preset-react',
        { runtime: 'automatic' },
      ],
    ],
  },
};

const rulesForCss = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';

  return {
    resolve: {
      alias: {
        '@utils': path.resolve(__dirname, 'src/utils/'),
      }
    },
    output: {
      filename: isProduction
        ? '[name].[contentHash].js'
        : 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'public/index.html' }),
      new ESLintPlugin()
    ],
    module: {
      rules: [
        rulesForJs,
        rulesForCss,
      ],
    },
    devServer: {
      port: 3000,
      hot: true,
      client: {
        logging: 'error',
        overlay: true,
      },
    },
    // devtool: 'source-map'
  };
};
