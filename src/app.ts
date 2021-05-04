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
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'https://skibiddy-front.herokuapp.com',
  preflightContinue: false,
};

app.use(cors(options));
app.use(express.json());

// Routes
app.use(authRoutes);
app.use(songRoutes);

export default app;
