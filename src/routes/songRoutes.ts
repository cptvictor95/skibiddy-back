import { Router } from 'express';
import createSong from '../controller/song/createSong';

const songRoutes = Router();

songRoutes.post('/song', createSong);

export default songRoutes;
