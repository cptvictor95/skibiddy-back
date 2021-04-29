import { SignInMock } from './mocks/SignInMock';
import { SignInInputDTO } from '../src/model/user';

/* 
  TO DO:
[X] Missing fields
[X] Invalid email
[X] SignIn Success
*/

// SignIn Suite
describe('SignIn Tests', () => {
  it('Should return missing email error.', async () => {
    expect.assertions(1);
    try {
      const user = {
        email: '',
        password: 'qweqwe',
      } as SignInInputDTO;

      await SignInMock(user);
    } catch (error) {
      expect(error.message).toBe('Email field is empty.');
    }
  });

  it('Should return missing password error.', async () => {
    expect.assertions(1);
    try {
      const user = {
        email: 'john.doe@email.com',
        password: '',
      } as SignInInputDTO;

      await SignInMock(user);
    } catch (error) {
      expect(error.message).toBe('Password field is empty.');
    }
  });

  it('Should return invalid email error.', async () => {
    try {
      const user = {
        email: 'john.doe@hotmail.com',
        password: 'qweqwe',
      } as SignInInputDTO;

      await SignInMock(user);
    } catch (error) {
      expect(error.message).toBe('Invalid email.');
    }
  });

  it('Should return token string', async () => {
    const user = {
      email: 'johnDoe@email.com',
      password: 'qweqwe',
    } as SignInInputDTO;

    const result = await SignInMock(user);

    expect(await SignInMock(user)).toMatch(result);
  });
});
