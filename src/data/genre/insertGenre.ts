import connection from '../../connection';
import { Genre } from '../../model/genre';
import { genreTable } from '../tableNames';

export const insertGenre = async (genre: Genre): Promise<Genre> => {
  const result: Genre[] = await connection
    .insert({
      id: genre.id,
      name: genre.name,
      song_id: genre.songId,
    })
    .into(genreTable);

  return result[0];
};
