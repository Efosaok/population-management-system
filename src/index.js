import 'idempotent-babel-polyfill';

import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv'; // eslint-disable-line
import routes from './routes';

import swaggerDoc from '../swagger.json';

import config from './config';

dotenv.config();

const { databaseUrl, env } = config;

const app = express();

const port = process.env.PORT || 1298;

const swaggerDocument = {
  ...swaggerDoc,
  host: process.env.NODE_ENV === 'production' ? 'pms-efosa.herokuapp.com' : `localhost:${port}`,
};


if (env !== 'test') {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(databaseUrl, { useNewUrlParser: true });
}

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app);

app.get('/', (req, res) => res.status(200).send({ message: 'welcome to the population-management api' }));

app.all('*', (req, res) =>
  res
    .status(200)
    .send({ message: 'oops, seems like you hit the wrong endpoint' }));

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

app.listen(port, () => logger.info(`API running on PORT ${port}`));

export default app;
