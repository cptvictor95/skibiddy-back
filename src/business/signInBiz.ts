import queryUserByEmail from '../data/user/queryUserByEmail';
import { SignInInputDTO, User } from '../model/user';
import { generateToken } from '../services/auth';
import { compare } from '../services/hash';

const signInBiz = async (input: SignInInputDTO): Promise<string> => {
  try {
    if (!input.email) throw new Error('Email field is empty.');
    if (!input.password) throw new Error('Password field is empty.');

    const user: User = await queryUserByEmail(input.email);

    if (!user) throw new Error('User not found.');

    const passwordIsValid: boolean = await compare(
      input.password,
      user.password
    );

    if (!passwordIsValid) throw new Error('Incorrect password.');

    const token: string = generateToken({
      id: user.id,
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default signInBiz;
