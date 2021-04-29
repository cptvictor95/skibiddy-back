import { User, UserInputDTO } from '../../src/model/user';
import signUpBiz from '../../src/business/signUpBiz';
import { authData } from '../../src/model/authData';
import { createIdMock } from './createIdMock';
import { generateToken } from './generateTokenMock';

export const SignUpMock = (input: UserInputDTO) => {
  const queryUsers = async (): Promise<User[]> => [];
  const hash = async (password: string): Promise<string> => 'senhaString';
  const insertUser = async (user: User): Promise<void> => {};

  const user = {
    id: createIdMock,
    name: input.name,
    nickname: input.nickname,
    email: input.email,
    password: input.password,
  };

  const token = signUpBiz(
    user,
    queryUsers,
    createIdMock,
    generateToken,
    hash,
    insertUser
  );

  return token;
};
