import { Song } from '../../model/song';

export const getFilteredSongsBiz = async (
  token: string,
  queryFilteredSongs: (
    title: string,
    album: string,
    genre: string,
    authorId: string
  ) => Promise<Song[]>,
  title: string,
  album: string,
  genre: string,
  authorId: string
) => {
  try {
    if (!token) throw new Error('Access denied');

    const songs = await queryFilteredSongs(title, album, genre, authorId);

    return songs;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
