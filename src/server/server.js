//import 'dotenv/config';
//import '@babel/polyfill';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import open from 'open';
import { builderMiddleware } from '../builder';

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(compression());
builderMiddleware().then(middleware => {
  app.use(middleware);
  app.listen(
    port,
    // eslint-disable-next-line no-console
    err => (err ? console.log(err) : open('http://localhost:' + port))
  );
});

