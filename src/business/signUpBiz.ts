import insertUser from '../data/user/insertUser';
import queryUsers from '../data/user/queryUsers';
import { UserInputDTO } from '../model/user';
import { generateToken } from '../services/auth';
import { hash } from '../services/hash';
import createId from '../services/idGen';

import emailValidator from '../utils/emailValidator';
import nicknameValidator from '../utils/nicknameValidator';

const signUpBiz = async (input: UserInputDTO): Promise<string> => {
  try {
    // Input Validations
    if (!input.name) throw new Error('Name field is empty.');
    if (!input.email) throw new Error('Email field is empty.');
    if (!input.nickname) throw new Error('Nickname field is empty.');
    if (!input.password) throw new Error('Password field is empty.');
    if (!input.email.includes('@')) throw new Error('Invalid email.');
    if (input.password.length < 6)
      throw new Error('Password must have at least 6 characters.');

    const users = await queryUsers();
    const emails = users.map((user) => user.email);
    const nicknames = users.map((user) => user.nickname);

    if (!users) throw new Error('No users found.');

    if (!emailValidator(emails, input.email))
      throw new Error('Email already registered.');
    if (!nicknameValidator(nicknames, input.nickname))
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
