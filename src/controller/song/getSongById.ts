import { Request, Response } from 'express';
import getSongByIdBiz from '../../business/song/getSongByIdBiz';

const getSongById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id as string;
    const token = req.headers.authorization as string;

    const song = await getSongByIdBiz(token, id);

    return res
      .status(200)
      .send({ status: 'Success!', message: 'Song found!', song: song });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};

export default getSongById;
