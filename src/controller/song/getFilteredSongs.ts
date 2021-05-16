import { Request, Response } from 'express';
import { getFilteredSongsBiz } from '../../business/song/getFilteredSongsBiz';
import getSongsBiz from '../../business/song/getSongsBiz';
import queryFilteredSongs from '../../data/song/queryFilteredSongs';
import queryUserByName from '../../data/user/queryUserByName';
import { authData } from '../../model/authData';
import { getTokenData } from '../../services/auth';

export const getFilteredSongs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, title, album, genre } = req.query;

    let user;
    let songs;
    if (name) user = await queryUserByName(name as string);
    const token = req.headers.authorization as string;
    const tokenData = getTokenData(token) as authData;

    if (name !== '' || title !== '' || album !== '' || genre !== '') {
      songs = await getFilteredSongsBiz(
        token,
        queryFilteredSongs,
        title as string,
        album as string,
        genre as string,
        user?.id as string
      );
    } else {
      songs = await getSongsBiz(tokenData);
    }

    return res.status(200).send({
      status: 'Success!',
      songs: songs,
    });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};
