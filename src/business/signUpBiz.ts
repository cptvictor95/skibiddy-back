import insertUser from '../data/user/insertUser';
import queryUsers from '../data/user/queryUsers';
import { UserInputDTO } from '../model/user';
import { generateToken } from '../services/auth';
import { hash } from '../services/hash';
import createId from '../services/idGen';
import registeredValidator from '../utils/registeredValidator';
import { inputValidator } from '../utils/inputValidator';

const signUpBiz = async (
  input: UserInputDTO,
  validateInput: typeof inputValidator,
  validateArray: typeof registeredValidator
): Promise<string> => {
  try {
    // Check if fields are empty
    validateInput(input.name, 'Name');
    validateInput(input.email, 'Email');
    validateInput(input.nickname, 'Nickname');
    validateInput(input.password, 'Password');
    if (!input.email.includes('@')) throw new Error('Invalid email.');
    if (input.password.length < 6)
      throw new Error('Password must have at least 6 characters.');

    const users = await queryUsers();
    const emails = users.map((user) => user.email);
    const nicknames = users.map((user) => user.nickname);

    if (!users) throw new Error('No users found.');

    // Check if already registered
    if (!validateArray(emails, input.email))
      throw new Error('Email already registered.');
    if (!validateArray(nicknames, input.nickname))
      throw new Error('Nickname already taken.');

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
