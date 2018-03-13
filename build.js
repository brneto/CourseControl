import webpack from 'webpack';
import { config } from './webpack.config';
import chalk from 'chalk';

/* eslint-disable no-console */
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production via Webpack. This will take a moment...'));

webpack(config).run((err, stats) => {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarning) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    return jsonStats.warnings.map(warn => console.log(chalk.yellow(warn)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.green('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'));

  return 0;
});
