import configVar, { InitCors } from './config';
import express, { Application } from 'express';
import logger from './utils/logger';
import { InitMongoConnection } from './config/db';

const app: Application = express();

InitMongoConnection();
InitCors(app);

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .listen(configVar.port, () => {
    logger.info(`Server Listen on PORT : ${configVar.port}`);
  });
