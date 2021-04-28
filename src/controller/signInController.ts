import { Request, Response } from 'express';
import signInBiz from '../business/signInBiz';
import { SignInInputDTO } from '../model/user';

const signInController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password }: SignInInputDTO = req.body;

    const token: string = await signInBiz({ email, password });

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
