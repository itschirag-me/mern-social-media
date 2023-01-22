import express, { Router } from 'express';
import { getUsers } from '../controller/user';
import isAuth from '../middleware/isAuth';

const router: Router = express.Router();

router.route('/').get(isAuth, getUsers);

const UserRoutes = router;
export default UserRoutes;
