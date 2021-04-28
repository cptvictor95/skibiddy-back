import { Request, Response } from 'express';
import getSongsBiz from '../../business/song/getSongsBiz';
import { authData } from '../../model/authData';
import { getTokenData } from '../../services/auth';

const getSongs = async (req: Request, res: Response): Promise<Response> => {
  try {
    const token = req.headers.authorization as string;
    const tokenData = getTokenData(token) as authData;

    const songs = await getSongsBiz(tokenData);

    return res
      .status(200)
      .send({ status: 'Success!', message: 'All songs listed!', songs: songs });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};

export default getSongs;
