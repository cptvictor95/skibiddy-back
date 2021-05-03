import express, { Express } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';
import songRoutes from './routes/songRoutes';

// App creation
const app: Express = express();

// .env config
dotenv.config();

// CORS config
const allowedOrigins = [
  'http://localhost:3000/signin',
  'https://skibiddy-front.herokuapp.com/signin',
];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// App config
app.use(express.json());
app.use(cors());

// Routes
app.use(authRoutes);
app.use(songRoutes);

export default app;
