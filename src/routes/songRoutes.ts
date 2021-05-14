import { Router } from 'express';
import createSong from '../controller/song/createSong';
import deleteSong from '../controller/song/deleteSong';
import getAuthorSongs from '../controller/song/getAuthorSongs';
import { getFilteredSongs } from '../controller/song/getFilteredSongs';
import getFreeSongs from '../controller/song/getFreeSongs';
import getSongById from '../controller/song/getSongById';
import getSongs from '../controller/song/getSongs';

const songRoutes = Router();

songRoutes.post('/songs', createSong);
songRoutes.get('/songs', getSongs);
songRoutes.get('/freeSongs', getFreeSongs);

// Query parameters
songRoutes.get('/songs/search', getFilteredSongs);
songRoutes.get('/songs/author', getAuthorSongs);

// Path parameters
songRoutes.get('/song/:id', getSongById);
songRoutes.delete('/song/:id', deleteSong);

export default songRoutes;
