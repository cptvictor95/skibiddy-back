import querySongById from '../../data/song/querySongById';
import { Song } from '../../model/song';

const getSongByIdBiz = async (token: string, id: string): Promise<Song> => {
  try {
    if (!token) throw new Error('Access denied.');
    if (!id) throw new Error('Song not found.');

    return await querySongById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getSongByIdBiz;
