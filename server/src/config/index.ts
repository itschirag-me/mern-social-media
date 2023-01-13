import cors from 'cors';
import * as dotenv from 'dotenv';
import { Application } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import CorsOption from '../interfaces/cors';
import logger from '../utils/logger';

switch (process.env.NODE_ENV) {
  case 'production':
    dotenv.config({ path: path.join(__dirname, '../../.env.production') });
    break;
  case 'development':
    dotenv.config({ path: path.join(__dirname, '../../.env') });
    break;
  default:
    logger.info(`NODE_ENV not found`);
    break;
}

const configVar = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI!,
};

export const InitCors = (app: Application) => {
  const corsOption: CorsOption = {
    origin: ['http://localhost:5000', 'http://localhost:3000', '*'],
  };
  app.use(cors(corsOption));
};

export default configVar;
