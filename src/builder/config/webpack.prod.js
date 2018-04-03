import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import { commonConfig, htmlPluginOptions } from './webpack.common.js';

const filePrefix = '[name].[chunkhash:8].bundle';
const chunkPrefix = '[name].[chunkhash:8].chunk';
export const prodConfig = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: `${filePrefix}.js`,
    chunkFilename: `${chunkPrefix}.js`
  },
  optimization: {
    minimizer: [
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
      new OptimizeCSSAssetsPlugin()
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `${filePrefix}.css`,
      chunkFilename: `${chunkPrefix}.css`
    }),

    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({ fileName: 'asset-manifest.json' })

    // Generate an HTML5 Application Cache for a Webpack build manifest.appcache
    // new AppCachePlugin({ exclude: ['.htaccess'] }),
  ]
});
