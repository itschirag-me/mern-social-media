import { Application } from 'express';
import CorsOption from '../interfaces/cors';
import cors from 'cors';

/**
 *  Allow Cross origin connection
 * @param app express() as Application
 */
const InitCors = (app: Application) => {
  const corsOption: CorsOption = {
    origin: ['http://localhost:5000', 'http://localhost:3000', '*'],
  };
  app.use(cors(corsOption));
};

export default InitCors;
