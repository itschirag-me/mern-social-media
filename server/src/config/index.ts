import dotenv from 'dotenv';
import path from 'path';
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

/**
 * Environment variables
 */
const configVar = {
  port: process.env.PORT!,

  mongoUri: process.env.MONGO_URI!,

  encryptKey: process.env.ENCRYPT_KEY!,
  jwtSecret: process.env.JWT_SECRET!,
};

export default configVar;
