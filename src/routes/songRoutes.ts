import { Router } from 'express';
import createSong from '../controller/song/createSong';
import getSongs from '../controller/song/getSongs';

const songRoutes = Router();

songRoutes.post('/song', createSong);
songRoutes.get('/songs', getSongs);

export default songRoutes;
