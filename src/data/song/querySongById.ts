import connection from '../../connection';
import { Song } from '../../model/song';
import { songTable } from '../tableNames';

const querySongById = async (id: string): Promise<Song> => {
  const result: Song[] = await connection
    .select('*')
    .from(songTable)
    .where({ id });

  return result[0];
};

export default querySongById;
