import connection from '../../connection';
import { Song } from '../../model/song';
import { songTable } from '../tableNames';

/**
 * @TODO EXPRESS ERROR PAYLOAD TOO LARGE ON SONG FILES
 * FILE READER TYPE ON SQL FOR FILE UPLOAD
 */

const insertSong = async (song: Song): Promise<Song> => {
  const result: Song[] = await connection
    .insert({
      id: song.id,
      title: song.title,
      album: song.album,
      genre: song.genre,
      file: song.file,
      posted_at: song.postedAt,
      author_id: song.authorId,
    })
    .into(songTable);

  return result[0];
};

export default insertSong;
