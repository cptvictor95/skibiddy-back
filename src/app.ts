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
  'http://localhost:3000/*',
  'https://skibiddy-front.herokuapp.com/*',
];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// App config
app.use(express.json());
app.use(cors(options));

// Routes
app.use(authRoutes);
app.use(songRoutes);

export default app;
