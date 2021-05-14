import { Router } from 'express';
import { createGenre } from '../controller/genre/createGenre';

// Router creation
const genreRoutes = Router();

genreRoutes.post('/genres', createGenre);

export default genreRoutes;
