import insertUser from '../data/user/insertUser';
import queryUsers from '../data/user/queryUsers';
import { UserInputDTO } from '../model/user';
import { generateToken } from '../services/auth';
import { hash } from '../services/hash';
import createId from '../services/idGen';

const signUpBiz = async (
  input: UserInputDTO,
  validateInput: (input: string, fieldName: string) => Error | void,
  registeredValidator: (
    array: string[],
    input: string,
    fieldName: string
  ) => Error | void,
  emailValidator: (email: string) => Error | void,
  passwordValidator: (password: string) => Error | void
): Promise<string> => {
  try {
    // Check if fields are empty
    validateInput(input.name, 'Name');
    validateInput(input.email, 'Email');
    validateInput(input.nickname, 'Nickname');
    validateInput(input.password, 'Password');
    // Check if email is valid
    emailValidator(input.email);
    // Check if password is valid
    passwordValidator(input.password);

    const users = await queryUsers();
    const emails = users.map((user) => user.email);
    const nicknames = users.map((user) => user.nickname);

    if (!users) throw new Error('No users found.');

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
