import { User, UserInputDTO } from '../../src/model/user';
import signUpBiz from '../../src/business/signUpBiz';
import { authData } from '../../src/model/authData';

export const authMock = (input: UserInputDTO) => {
  const createId = () => 'idMock';
  const queryUsers = async (): Promise<User[]> => [];
  const generateToken = (payload: authData) => 'tokenMock';
  const hash = async (password: string): Promise<string> => 'senhaString';
  const insertUser = async (user: User): Promise<void> => {};

  const user = {
    id: createId,
    name: input.name,
    nickname: input.nickname,
    email: input.email,
    password: input.password,
  };

  const token = signUpBiz(
    user,
    queryUsers,
    createId,
    generateToken,
    hash,
    insertUser
  );

  return token;
};
