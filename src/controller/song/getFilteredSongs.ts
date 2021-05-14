import { Request, Response } from 'express';
import { getFilteredSongsBiz } from '../../business/song/getFilteredSongsBiz';
import queryFilteredSongs from '../../data/song/queryFilteredSongs';
import queryUserByName from '../../data/user/queryUserByName';

export const getFilteredSongs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, title, album, genre } = req.query;

    let user;
    if (name) user = await queryUserByName(name as string);
    const token = req.headers.authorization as string;

    const songs = await getFilteredSongsBiz(
      token,
      queryFilteredSongs,
      title as string,
      album as string,
      genre as string,
      user?.id as string
    );

    return res.status(200).send({
      status: 'Success!',
      songs: songs,
    });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};
