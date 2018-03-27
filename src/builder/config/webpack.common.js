import webpack from 'webpack';
import WebpackMd5Hash from 'webpack-md5-hash';
import autoprefixer from 'autoprefixer';
import flexbugsfixes from 'postcss-flexbugs-fixes';
import path from 'path';

export const cssLoaderOptions = {
  importLoaders: 2
};

export const postCssLoaderOptions = {
  // https://webpack.js.org/guides/migrating/#complex-options
  //ident: 'postcss',
  plugins: [flexbugsfixes, autoprefixer({ flexbox: 'no-2009' })]
};

export const sassLoaderOptions = {
  importer: url =>
    url.startsWith('bootstrap') || url.startsWith('toastr')
      ? { file: path.resolve(`./node_modules/${url}`) }
      : { file: url }
};

export const htmlPluginOptions = {
  title: 'react-dev-env',
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
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    path: path.resolve('dist'),
    publicPath: '/'
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
              // This 'name' option is passed through into 'file-loader' when
              // fallback loader is triggered.
              name: '[name].[hash:8].[ext]'
            }
          }
        ]
      }
      // Not needed in react, but very useful in Angular projects.
      //{ test: /\.html$/, use: ['html-loader'] },
      //{ test: /\.txt$/, use: ['raw-loader'] }
    ]
  },
  plugins: [
    // Use CommonsChunkPlugin to extract third-party
    // dependencies into an entirely new chunk.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: m => m.context && m.context.includes('node_modules')
    }),

    // Extract the webpack bootstrap logic into a separate file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
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
