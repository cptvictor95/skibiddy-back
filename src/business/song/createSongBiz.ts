import insertSong from '../../data/song/insertSong';
import { SongInputDTO } from '../../model/song';
import { generateToken } from '../../services/auth';
import createId from '../../services/idGen';

const createSongBiz = async (input: SongInputDTO): Promise<string> => {
  try {
    // Input Validations
    if (!input.title) throw new Error('Title field is empty.');
    if (!input.album) throw new Error('Album field is empty.');
    if (!input.genre) throw new Error('Genre field is empty.');
    if (!input.file) throw new Error('File field is empty.');

    const id: string = createId();
    const token: string = generateToken({ id });

    await insertSong({
      id: id,
      title: input.title,
      album: input.album,
      genre: input.genre,
      file: input.file,
      authorId: input.authorId,
      postedAt: input.postedAt,
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createSongBiz;
