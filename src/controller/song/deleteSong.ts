import { Request, Response } from 'express';
import deleteSongBiz from '../../business/song/deleteSongBiz';
import deleteSongQuery from '../../data/song/deleteSongQuery';
import querySongById from '../../data/song/querySongById';

const deleteSong = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id as string;
    const token = req.headers.authorization as string;
    const song = await querySongById(id);

    await deleteSongBiz(token, id, deleteSongQuery);

    return res
      .status(200)
      .send({
        status: 'Success!',
        message: 'Song deleted!',
        deletedSong: song,
      });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};

export default deleteSong;
