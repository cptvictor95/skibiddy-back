import { User, UserInputDTO } from '../../src/model/user';
import signUpBiz from '../../src/business/signUpBiz';
import { createIdMock } from './createIdMock';
import { generateToken } from './generateTokenMock';
import { hash } from './hashPasswordMock';

export const SignUpMock = (input: UserInputDTO) => {
  const queryUsers = async (): Promise<User[]> => [];
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
