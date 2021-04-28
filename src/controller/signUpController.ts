import { Request, Response } from 'express';
import signUpBiz from '../business/signUpBiz';
import { UserInputDTO } from '../model/user';

const signUpController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, nickname, email, password }: UserInputDTO = req.body;

    const token = await signUpBiz({
      name: name,
      nickname: nickname,
      email: email,
      password: password,
    });

    return res.status(201).send({
      status: 'Success!',
      message: 'User registered!',
      user: { name, nickname, email },
      token: token,
    });
  } catch (error) {
    return res.status(400).send({ status: 'Error!', message: error.message });
  }
};

export default signUpController;
