import express, { Express } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';

// App creation
const app: Express = express();

// .env config
dotenv.config();

// App config
app.use(express.json());
app.use(cors());

// Auth Routes
app.use(authRoutes);

export default app;
