import path from 'path';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import chalk from 'chalk';
import { devConfig } from './config/webpack.dev';

const { output } = devConfig;
const compiler = webpack(devConfig);

/* eslint-disable no-console */
console.log(chalk.blue(
  '[dev-build]',
  'Generating in-memory bundle for development via Webpack.',
  'wait a moment...'
));

const devMiddleware = webpackDev(compiler, {
  logLevel: 'trace',
  publicPath: output.publicPath
});

const hotMiddleware = webpackHot(compiler, {
  // eslint-disable-next-line no-console
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10000
});

const spaMiddleware = (req, res, next) => {
  const { url } = req;
  const rootUrl = url.split('/').pop();
  const indexPath = path.join(output.path, 'index.html');
  const indexFile = devMiddleware.fileSystem.readFileSync(indexPath);

  if (rootUrl === 'source') {
    res.set('Content-Type', 'text/plain');
  }

  if (rootUrl === 'index.html' || !rootUrl.endsWith('.html')) {
    res.end(indexFile);
  } else {
    next();
  }
};

export default [devMiddleware, hotMiddleware, spaMiddleware];
//module.exports = [devMiddleware, hotMiddleware, spaMiddleware];
