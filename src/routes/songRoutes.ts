import { Router } from 'express';
import createSong from '../controller/song/createSong';
import deleteSong from '../controller/song/deleteSong';
import getSongById from '../controller/song/getSongById';
import getSongs from '../controller/song/getSongs';

const songRoutes = Router();

songRoutes.post('/songs', createSong);
songRoutes.get('/songs', getSongs);
songRoutes.delete('/song/:id', deleteSong);
songRoutes.get('/song/:id', getSongById);

export default songRoutes;
