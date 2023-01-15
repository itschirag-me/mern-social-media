import configVar from './config';
import express, { Application } from 'express';
import logger from './utils/logger';
import InitMongoConnection from './config/db';
import ApiRoutes from './routes';
import { handleErrors, handleNotFound } from './controller';
import InitCors from './config/cors';

const app: Application = express();

InitMongoConnection();
InitCors(app);

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/api', ApiRoutes)
  .use(handleErrors)
  .use(handleNotFound)
  .listen(configVar.port, () => {
    logger.info(`Server Listen on PORT:${configVar.port}`);
  });
