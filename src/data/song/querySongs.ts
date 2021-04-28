import connection from '../../connection';
import { Song } from '../../model/song';

const querySongs = async (): Promise<Song[]> => {
  const result: Song[] = await connection.select('*').from('Songs');

  return result;
};

export default querySongs;
