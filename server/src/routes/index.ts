import express, { Router } from 'express';
import { getApiHealth } from '../controller';
import { postSignin, postSignup } from '../controller/auth';
import isValid from '../middleware/isValid';
import { loginSchema, userSchema } from '../utils/validate';

const routes: Router = express.Router();

routes.route('/health').get(getApiHealth);

// Auth APIs signup
routes.route('/signup').post(isValid(userSchema), postSignup);
routes.route('/signin').post(isValid(loginSchema), postSignin);

const ApiRoutes = routes;
export default ApiRoutes;
