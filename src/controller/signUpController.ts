import { Request, Response } from 'express';
import signUpBiz from '../business/signUpBiz';
import insertUser from '../data/user/insertUser';
import queryUsers from '../data/user/queryUsers';
import { UserInputDTO } from '../model/user';
import { generateToken } from '../services/auth';
import { hash } from '../services/hash';
import createId from '../services/idGen';
import { emailValidator } from '../utils/emailValidator';
import { inputValidator } from '../utils/inputValidator';
import { passwordValidator } from '../utils/passwordValidator';
import { registeredValidator } from '../utils/registeredValidator';

const signUpController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, nickname, email, password }: UserInputDTO = req.body;

    const token = await signUpBiz(
      {
        name: name,
        nickname: nickname,
        email: email,
        password: password,
      },
      queryUsers,
      createId,
      generateToken,
      hash,
      insertUser
    );

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
