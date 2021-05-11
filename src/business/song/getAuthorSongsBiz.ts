import { authData } from '../../model/authData';
import { Song } from '../../model/song';

const getAuthorSongsBiz = async (
  id: string,
  token: string,
  querySongsByAuthor: (id: string) => Promise<Song[]>
) => {
  try {
    if (!token) throw new Error('Access denied');
    if (!id) throw new Error('User ID not found');

    const songs = await querySongsByAuthor(id);

    return songs;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default getAuthorSongsBiz;
