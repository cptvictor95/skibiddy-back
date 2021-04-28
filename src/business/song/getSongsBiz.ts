import querySongs from '../../data/song/querySongs';
import { authData } from '../../model/authData';
import { Song } from '../../model/song';

const getSongsBiz = async (input: authData): Promise<Song[]> => {
  try {
    if (!input) throw new Error('Access denied.');
    const songs = await querySongs();
    if (!songs) throw new Error('No songs found.');

    return songs;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getSongsBiz;
