import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.post('/create-users', UserController.create);

export default routes;
