import { Request, Response } from 'express';
import createSongBiz from '../../business/song/createSongBiz';
import queryUserByEmail from '../../data/user/queryUserByEmail';
import queryUserById from '../../data/user/queryUserById';
import { SongInputDTO } from '../../model/song';
import { getTokenData } from '../../services/auth';

const createSong = async (req: Request, res: Response): Promise<Response> => {
  try {
    const token = req.headers.authorization as string;
    const tokenData = getTokenData(token);

    const { title, album, genre, file, postedAt }: SongInputDTO = req.body;
    await createSongBiz({
      title: title,
      album: album,
      genre: genre,
      file: file,
      postedAt: postedAt,
      authorId: tokenData.id,
    });

    const creator = await queryUserById(tokenData.id);

    return res.status(201).send({
      status: 'Success!',
      message: 'Song published!',
      song: {
        title,
        album,
        genre,
        createdBy: creator.name,
      },
    });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};

export default createSong;
