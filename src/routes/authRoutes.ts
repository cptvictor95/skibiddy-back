import { Router } from 'express';
import signInController from '../controller/signInController';
import signUpController from '../controller/signUpController';

// Router creation
const authRoutes = Router();

// Routes
authRoutes.post('/signup', signUpController);
authRoutes.post('/signin', signInController);

export default authRoutes;
