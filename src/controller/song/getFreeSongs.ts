import { Request, Response } from 'express';
import querySongs from '../../data/song/querySongs';

const getFreeSongs = async (req: Request, res: Response) => {
  try {
    const songs = await querySongs();
    return res.status(200).send({ status: 'Success!', songs: songs });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};

export default getFreeSongs;
