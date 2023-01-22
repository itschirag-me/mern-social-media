import express, { Router } from 'express';
import { getApiHealth } from '../controller';
import { postSignin } from '../controller/auth';
import { postUser } from '../controller/user';
import isValid from '../middleware/isValid';
import { loginSchema, userSchema } from '../utils/validate';
import UserRoutes from './user';

const routes: Router = express.Router();

routes.route('/health').get(getApiHealth);

// Auth APIs signup
routes.route('/signup').post(isValid(userSchema), postUser);
routes.route('/signin').post(isValid(loginSchema), postSignin);

// User APIs
routes.use('/users', UserRoutes);

const ApiRoutes = routes;
export default ApiRoutes;
