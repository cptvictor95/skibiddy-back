import { Song } from '../../model/song';

const getSongByIdBiz = async (
  token: string,
  id: string,
  querySongById: (id: string) => Promise<Song>
): Promise<Song> => {
  try {
    if (!token) throw new Error('Access denied.');
    if (!id) throw new Error('Song Id not found.');
    const song = await querySongById(id);
    if (!song) throw new Error('Song not found.');

    return song;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getSongByIdBiz;
