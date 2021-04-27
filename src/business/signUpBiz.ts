import insertUser from '../data/user/insertUser';
import { UserInputDTO } from '../model/user';
import { generateToken } from '../services/auth';
import { hash } from '../services/hash';
import createId from '../services/idGen';

const signUpBiz = async (input: UserInputDTO): Promise<string> => {
  try {
    // Input Validations
    if (!input.email || !input.password || !input.name)
      throw new Error('Please fill all the fields.');
    if (!input.email.includes('@')) throw new Error('Invalid email.');
    if (input.password.length < 6)
      throw new Error('Password must have at least 6 characters.');

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
