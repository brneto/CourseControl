import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
import flexbugsfixes from 'postcss-flexbugs-fixes';
import path from 'path';

const sassLoaderOptions = {
  importer: url =>
    url.startsWith('bootstrap') || url.startsWith('toastr')
      ? { file: path.resolve(`./node_modules/${url}`) }
      : { file: url }
};

export const htmlPluginOptions = {
  title: 'CopyDesk',
  filename: 'index.html',
  template: './public/index.html',
  inject: true,
  favicon: './public/favicon.ico',
  xhtml: true
};

export const commonConfig = {
  target: 'web',
  bail: true,
  entry: {
    app: ['babel-polyfill', './src/client/index.js']
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'initial',
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      // This loader parallelizes code compilation, it is optional but
      // improves compile time on larger projects
      {
        test: /\.js$/,
        include: [/node_modules\/@material/, /src\/client/],
        //exclude: /node_modules\/(?!@material)/,
        use: [
          { loader: 'thread-loader' },
          { loader: 'babel-loader',
            options: {
              // This is a feature of `babel-loader` for Webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              babelrc: false,
              presets: [
                ['env',  {
                  targets: { uglify: true },
                  modules: false,
                  useBuiltIns: true,
                  debug: true
                }],
                'react'
              ],
              plugins: [
                'react-hot-loader/babel',
                'transform-decorators-legacy',
                'transform-class-properties',
                'transform-object-rest-spread',
                'transform-function-bind',
                // It's required Babel Syntax Dynamic Import Plugin to
                // Webpack Dynamic Imports work.
                'syntax-dynamic-import'
              ]
            }
          },
          { loader: 'eslint-loader' }
        ]
      },
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: '[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'css-hot-loader' },
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { importLoaders: 2,  sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              //ident: 'postcss',
              plugins: [
                flexbugsfixes,
                autoprefixer({ flexbox: 'no-2009' })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: sassLoaderOptions
          }
        ]
      }
      // Not needed in react, but very useful in Angular projects.
      //{ test: /\.html$/, use: ['html-loader'] },
      //{ test: /\.txt$/, use: ['raw-loader'] }
    ]
  },
  plugins: [
    // Default used by Webpack 4
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // })
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
