import mongoose from 'mongoose';
import configVar from '.';
import logger from '../utils/logger';

mongoose.set('strictQuery', true);

const InitMongoConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(configVar.mongoUri);
  } catch (error: any) {
    logger.error(error.message);
  }
};

export default InitMongoConnection;
