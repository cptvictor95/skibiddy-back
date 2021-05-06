import { Song } from '../../model/song';

const deleteSongBiz = async (
  token: string,
  id: string,
  deleteSongQuery: (id: string) => Promise<number>
): Promise<number> => {
  try {
    if (!token) throw new Error('Access denied.');
    console.info('songId: ', id);
    if (!id) throw new Error('Song ID not found.');
    const song = await deleteSongQuery(id);
    if (!song) throw new Error('Song not found.');

    return song;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default deleteSongBiz;
