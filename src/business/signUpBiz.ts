import { authData } from '../model/authData';
import { User, UserInputDTO } from '../model/user';
import { emailValidator } from '../utils/emailValidator';
import { inputValidator } from '../utils/inputValidator';
import { passwordValidator } from '../utils/passwordValidator';
import { registeredValidator } from '../utils/registeredValidator';

const signUpBiz = async (
  input: UserInputDTO,
  queryUsers: () => Promise<User[]>,
  createId: () => string,
  generateToken: (payload: authData) => string,
  hash: (password: string) => Promise<string>,
  insertUser: (user: User) => Promise<void>
): Promise<string> => {
  try {
    // Check if fields are empty
    inputValidator(input.name, 'Name');
    inputValidator(input.email, 'Email');
    inputValidator(input.nickname, 'Nickname');
    inputValidator(input.password, 'Password');
    // Check if email is valid
    emailValidator(input.email);
    // Check if password is valid
    passwordValidator(input.password);

    const users = await queryUsers();
    const emails = users.map((user) => user.email);
    const nicknames = users.map((user) => user.nickname);

    // Check if already registered
    registeredValidator(emails, input.email, 'Email');
    registeredValidator(nicknames, input.nickname, 'Nickname');

    // Services
    const id = createId() as string;
    const token: string = generateToken({ id });
    const hashedPass = await hash(input.password);

    // Database insert query
    await insertUser({
      id: id,
      name: input.name,
      email: input.email,
      nickname: input.nickname,
      password: hashedPass,
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default signUpBiz;
