import { SongInputDTO } from '../src/model/song';
import createSongBiz from '../src/business/song/createSongBiz';

describe('Song Tests', () => {
  it('Should return missing title error.', async () => {
    try {
      const song = {
        title: '',
        album: '',
        genre: '',
        file: '',
        posted_at: '',
        author_id: '',
      } as SongInputDTO;

      console.log();

      await createSongBiz(song);
    } catch (error) {
      expect(error.message).toBe('Title field is empty.');
    }
  });
});
