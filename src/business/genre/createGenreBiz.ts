import { Genre, GenreDTO } from '../../model/genre';
import createId from '../../services/idGen';

export const createGenreBiz = async (
  userToken: string,
  input: GenreDTO,
  insertGenre: (genre: Genre) => Promise<Genre>
): Promise<Genre> => {
  try {
    // Input Validations
    if (!input.name) throw new Error('Name field is empty.');
    if (!userToken) throw new Error('Access denied.');

    const id: string = createId();

    return await insertGenre({
      id: id,
      name: input.name,
      songId: input.songId,
    });
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
