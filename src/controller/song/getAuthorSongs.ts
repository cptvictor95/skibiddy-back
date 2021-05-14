import { Request, Response } from 'express';
import getAuthorSongsBiz from '../../business/song/getAuthorSongsBiz';
import querySongsByAuthor from '../../data/song/querySongsByAuthor';
import queryUserByName from '../../data/user/queryUserByName';

/**
 * @TODO
 * ORDERBY + FILTER + PAGINATION ALL TOGETHER
 * const { name = "%", genre = "%", album = "%" } = req.query
 */
const getAuthorSongs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const name = req.query.name as string;

    const user = await queryUserByName(name as string);
    const token = req.headers.authorization as string;

    const songs = await getAuthorSongsBiz(user.id, token, querySongsByAuthor);

    return res.status(200).send({
      user: { name: user.name, nickname: user.nickname },
      songs: songs,
    });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};

export default getAuthorSongs;
