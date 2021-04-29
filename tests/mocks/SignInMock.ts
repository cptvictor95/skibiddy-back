import { SignInInputDTO, User } from '../../src/model/user';
import signInBiz from '../../src/business/signInBiz';
import { generateToken } from './generateTokenMock';
import { comparePassword } from './comparePasswordMock';

export const SignInMock = (input: SignInInputDTO) => {
  const user = {
    email: input.email,
    password: input.password,
  };
  const fullUser = {
    id: '',
    name: '',
    nickname: '',
    email: '',
    password: '',
  };

  const queryUserByEmail = async (id: string): Promise<User> => fullUser;

  const token = signInBiz(
    user,
    queryUserByEmail,
    comparePassword,
    generateToken
  );

  return token;
};
