import { authData } from '../model/authData';
import { SignInInputDTO, User } from '../model/user';
import { inputValidator } from '../utils/inputValidator';

const signInBiz = async (
  input: SignInInputDTO,
  queryUserByEmail: (email: string) => Promise<User>,
  comparePassword: (password: string, hash: string) => Promise<boolean>,
  generateToken: (payload: authData) => string
): Promise<string> => {
  try {
    // Check if fields are empty
    inputValidator(input.email, 'Email');
    inputValidator(input.password, 'Password');
    // Query user
    const user = await queryUserByEmail(input.email);
    // Check if user is registered
    if (!user) throw new Error('User not found.');
    // Compare input password with hashed
    const passwordIsValid = await comparePassword(
      input.password,
      user.password
    );
    // Check if password is valid
    if (!passwordIsValid) throw new Error('Incorrect password.');
    // Generate logged in user token
    const token: string = generateToken({
      id: user.id,
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default signInBiz;
