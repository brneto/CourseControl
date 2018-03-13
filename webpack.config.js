import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import path from 'path';

const debug = process.env.NODE_ENV !== 'production';
const plugins = [
  // Use CommonsChunkPlugin to extract third-party
  // dependencies into an entirely new chunk.
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: m => (m.context && m.context.includes('node_modules'))
  }),
  // Extract the webpack bootstrap logic into a separate file
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  }),

  // Generate an external css file
  new ExtractTextPlugin('[name].style.[contenthash].css'),

  // Hash the files using MD5 so that their names change when the content changes.
  new WebpackMd5Hash(),

  // Create HTML file that includes reference to bundled JS.
  new HtmlWebpackPlugin({
    title: 'Github Viewer',
    filename: 'index.html',
    template: './src/client/index.html',
    inject: true,
    //favicon: './src/client/favicon.ico'
  }),

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

export const config = {
  target: 'web',
  devtool: debug ? 'inline-source-map' : 'source-map',
  entry: {
    app: debug ? [
      'babel-polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      './src/client/index.js',
    ] : [
      'babel-polyfill',
      './src/client/index.js',
    ]
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].chunk.[hash].js'
  },
  plugins: debug ?
    plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
    ]) :
    plugins.concat([
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
    ]),
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, use: ['file-loader'] },
      { test: /\.html$/, use: ['html-loader'] },
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }
    ]
  }
};
