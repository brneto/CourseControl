import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import { commonConfig, htmlPluginOptions } from './webpack.common.js';

export const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ]
  },
  output: {
    filename: '[name].[hash:8].bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin(htmlPluginOptions),

    // Default used by Webpack 4
    //new webpack.NamedModulesPlugin(),

    // Generate an external css file
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].bundle.css',
      chunkFilename: '[name].chunk.css'
    }),

    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),

    // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebook/create-react-app/issues/240
    new CaseSensitivePathsPlugin()
  ],
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false
  }
});
