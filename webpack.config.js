const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { NODE_ENV } = process.env

const IS_DEV = NODE_ENV !== 'production'

module.exports = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'eval-cheap-source-map' : false,
  devServer: {
    historyApiFallback: true
  },
  entry: [path.join(__dirname, '/src/index.tsx')],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack']
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts',
          publicPath: 'assets/fonts'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/assets/images', to: 'src/assets/images' }]
    }),
    new HtmlWebpackPlugin({ template: './www/index.html' })
  ]
}
