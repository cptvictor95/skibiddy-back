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
  'https://skibiddy-front.herokuapp.com',
];
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
// App config
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use(authRoutes);
app.use(songRoutes);

export default app;
