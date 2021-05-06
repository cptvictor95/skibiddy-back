import connection from '../../connection';
import { Song } from '../../model/song';
import { songTable } from '../tableNames';

const deleteSongQuery = async (id: string): Promise<number> => {
  console.info('delete result id', id);
  const result = await connection.delete().from(songTable).where({ id });

  console.info('delete result', result);

  return result;
};

export default deleteSongQuery;
