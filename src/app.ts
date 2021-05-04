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
const whitelist = [
  'http://localhost:3000',
  'https://skibiddy-front.herokuapp.com/',
];

// App config
const options: cors.CorsOptions = {
  origin: ['http://localhost:3000', 'https://skibiddy-front.herokuapp.com'],
};

app.use(cors(options));
app.use(express.json());

// Routes
app.use(authRoutes);
app.use(songRoutes);

export default app;
