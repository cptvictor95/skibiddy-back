import connection from '../../connection';
import { Song } from '../../model/song';
import { songTable } from '../tableNames';

const queryFilteredSongs = async (
  title: string,
  album: string,
  genre: string,
  authorId: string
) => {
  let result: Song[];
  if (title) {
    result = await connection
      .select('*')
      .from(songTable)
      .where('title', 'LIKE', `%${title}%`);
  }
  if (album) {
    result = await connection
      .select('*')
      .from(songTable)
      .where('album', 'LIKE', `%${album}%`);
  }
  if (genre) {
    result = await connection
      .select('*')
      .from(songTable)
      .where('genre', 'LIKE', `%${genre}%`);
  }
  if (authorId) {
    result = await connection
      .select('*')
      .from(songTable)
      .where({ author_id: authorId });
  }

  return result!;
};

export default queryFilteredSongs;
