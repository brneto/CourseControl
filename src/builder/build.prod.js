import path from 'path';
import fs from 'fs';
import chokidar from 'chokidar';
import webpack from 'webpack';
import express from 'express';
import chalk from 'chalk';
import { prodConfig } from './config/webpack.prod';

const outputPath = prodConfig.output.path;
const compiler = webpack(prodConfig);

/* eslint-disable no-console */
console.log(chalk.blue(
  '[prod-build]',
  'Generating minified bundle for production via Webpack.',
  'This will take a moment...'
));

compiler.run((err, stats) => {
  if (err) {
    console.error(chalk.red(err.stack || err));
    if(err.details) {
      console.error(chalk.red(err.details));
    }
    return;
  }

  // const info = stats.toJson();

  // if (stats.hasErrors()) {
  //   console.log(chalk.red('Webpack generated the following errors:'));
  //   info.errors.map(err => console.error(chalk.red(err)));
  // }

  // if (stats.hasWarnings()) {
  //   console.log(chalk.yellow('Webpack generated the following warnings:'));
  //   info.warnings.map(warn => console.warn(chalk.yellow(warn)));
  // }

  console.log('--------------------------------------------------------------');
  console.log(stats.toString({ colors: true }));
  console.log('--------------------------------------------------------------');

  console.log(chalk.green(
    `Your app has been compiled in production mode and written to ${outputPath}.`,
    'It\'s ready to roll!'
  ));
});

const prodMiddleware = express.static(outputPath);

const spaMiddleware = (req, res, next) => {
  const { url } = req;
  const rootUrl = url.split('/').pop();
  const indexPath = path.join(outputPath, 'index.html');
  const watcher = chokidar.watch(indexPath, { ignoreInitial: true });

  watcher.on('add', file => {
    console.log(`File ${file} has been added.`);
    const indexFile = fs.readFileSync(indexPath);

    if (rootUrl === 'source') {
      res.set('Content-Type', 'text/plain');
    }

    if (rootUrl === 'index.html' || !rootUrl.endsWith('.html')) {
      res.end(indexFile);
    } else {
      next();
    }
    watcher.close();
  });
};

export default [prodMiddleware, spaMiddleware];
