import { Request, Response } from 'express';
import signInBiz from '../business/signInBiz';
import queryUserByEmail from '../data/user/queryUserByEmail';
import { SignInInputDTO } from '../model/user';
import { generateToken } from '../services/auth';
import { comparePassword } from '../services/hash';

const signInController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password }: SignInInputDTO = req.body;

    const token: string = await signInBiz(
      { email, password },
      queryUserByEmail,
      comparePassword,
      generateToken
    );

    return res.status(200).send({
      status: 'Success!',
      message: 'User logged in!',
      user: email,
      token: token,
    });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};

export default signInController;
