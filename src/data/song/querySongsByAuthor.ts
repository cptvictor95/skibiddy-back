import connection from '../../connection';
import { Song } from '../../model/song';
import { songTable } from '../tableNames';

const querySongsByAuthor = async (id: string): Promise<Song[]> => {
  const result: Song[] = await connection
    .select('*')
    .from(songTable)
    .where({ author_id: id });

  return result;
};

export default querySongsByAuthor;
