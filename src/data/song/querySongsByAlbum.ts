import connection from '../../connection';
import { Song } from '../../model/song';
import { songTable } from '../tableNames';

const querySongsByAlbum = async (album: string): Promise<Song[]> => {
  const result: Song[] = await connection
    .select('*')
    .from(songTable)
    .where('album', 'LIKE', `%${album}%`);

  return result;
};

export default querySongsByAlbum;
