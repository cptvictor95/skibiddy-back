import { Router } from 'express';
import signUpController from '../controller/signUpController';

// Router creation
const authRoutes = Router();

// Routes
authRoutes.post('/signup', signUpController);

export default authRoutes;
