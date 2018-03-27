import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
//import ExtraneousFileCleanupPlugin from 'webpack-extraneous-file-cleanup-plugin';
import {
  commonConfig,
  cssLoaderOptions,
  postCssLoaderOptions,
  sassLoaderOptions,
  htmlPluginOptions
} from './webpack.common.js';

export const prodConfig = merge(commonConfig, {
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash:8].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { hmr: false }
          },
          use: [
            {
              loader: 'css-loader',
              options: Object.assign(cssLoaderOptions, { minimize: true })
            },
            {
              loader: 'postcss-loader',
              options: postCssLoaderOptions
            },
            {
              loader: 'sass-loader',
              options: sassLoaderOptions
            }
          ]
        })
      }
    ]
  },
  plugins: [
    // Remove/clean your build folder(s) before building
    new CleanWebpackPlugin(['dist']),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin(
      Object.assign(htmlPluginOptions, {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
    ),

    // Generate an external css file
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      allChunks: true
    }),

    // Minify the code.
    new UglifyJsPlugin({
      // Use multi-process parallel running to improve the build speed
      // Default number of concurrent runs: os.cpus().length - 1
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        ecma: 8,
        warnings: true,
        compress: {
          warnings: true,
          // Disabled because of an issue with Uglify breaking seemingly valid code:
          // https://github.com/facebook/create-react-app/issues/2376
          // Pending further investigation:
          // https://github.com/mishoo/UglifyJS2/issues/2011
          comparisons: false
        },
        mangle: {
          safari10: true
        },
        output: {
          // Turned on because emoji and regex is not minified properly using default
          // https://github.com/facebook/create-react-app/issues/2488
          ascii_only: true
        }
      }
    }),

    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({ fileName: 'asset-manifest.json' }),

    // Generate an HTML5 Application Cache for a Webpack build manifest.appcache
    // new AppCachePlugin({ exclude: ['.htaccess'] }),

    // Remove unused files due to multiple entry points and ExtractTextPlugin.
    //new ExtraneousFileCleanupPlugin({
    //  extensions: ['.js'],
    //  manifestJsonName: 'asset-manifest.json'
    //})
  ]
});
