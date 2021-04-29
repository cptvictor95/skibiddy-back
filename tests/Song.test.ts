import createSongBiz from '../src/business/song/createSongBiz';
import { SongInputDTO } from '../src/model/song';

/* 
  -- TO DO:
[X] Missing fields
[] Not authenticated
*/

describe('Song Test Suite', () => {
  it('Should return missing field error.', async () => {
    try {
      const song = {
        title: '',
        album: 'Wish You Were Here',
        genre: 'Rock progressivo',
        file: 'https://www.youtube.com/watch?v=IXdNnw99-Ic',
      } as SongInputDTO;

      await createSongBiz(song);
    } catch (error) {
      expect(error.message).toBe('Title field is empty.');
    }
  });

  it('Should return missing field error.', async () => {
    try {
      const song = {
        title: 'Wish You Were Here',
        album: '',
        genre: 'Rock progressivo',
        file: 'https://www.youtube.com/watch?v=IXdNnw99-Ic',
      } as SongInputDTO;

      await createSongBiz(song);
    } catch (error) {
      expect(error.message).toBe('Album field is empty.');
    }
  });

  it('Should return missing field error.', async () => {
    try {
      const song = {
        title: 'Wish You Were Here',
        album: 'Wish You Were Here',
        genre: '',
        file: 'https://www.youtube.com/watch?v=IXdNnw99-Ic',
      } as SongInputDTO;

      await createSongBiz(song);
    } catch (error) {
      expect(error.message).toBe('Genre field is empty.');
    }
  });

  it('Should return missing field error.', async () => {
    try {
      const song = {
        title: 'Wish You Were Here',
        album: 'Wish You Were Here',
        genre: 'Rock progressivo',
        file: '',
      } as SongInputDTO;

      await createSongBiz(song);
    } catch (error) {
      expect(error.message).toBe('File field is empty.');
    }
  });
});
