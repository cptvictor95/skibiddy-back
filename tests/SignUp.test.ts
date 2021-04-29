import signUpBiz from '../src/business/signUpBiz';
import { User, UserInputDTO } from '../src/model/user';
import { SignUpMock } from './mocks/SignUpMock';
import { authData } from '../src/model/authData';

/* 
  -- TO DO:
[X] Missing fields
[X] Invalid email
[X] Email already registered
[X] Nickname already registered
[X] Password too short
[X] Password too long
[X] SignUp Success
*/

// SignUp Suite
describe('SignUp Test Suite', () => {
  test('Should return missing field error.', async () => {
    try {
      const user = {
        name: '',
        nickname: 'johnDoe',
        email: 'john.doe@email.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await SignUpMock(user);
    } catch (error) {
      expect(error.message).toBe('Name field is empty.');
    }
  });

  test('Should return missing field error.', async () => {
    try {
      const user = {
        name: 'John Doe',
        nickname: '',
        email: 'john.doe@email.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await SignUpMock(user);
    } catch (error) {
      expect(error.message).toBe('Nickname field is empty.');
    }
  });

  test('Should return missing field error.', async () => {
    try {
      const user = {
        name: 'John Doe',
        nickname: 'johnDoe',
        email: '',
        password: 'qweqwe',
      } as UserInputDTO;

      await SignUpMock(user);
    } catch (error) {
      expect(error.message).toBe('Email field is empty.');
    }
  });

  test('Should return missing field error.', async () => {
    try {
      const user = {
        name: 'John Doe',
        nickname: 'johnDoe',
        email: 'john.doe@email.com',
        password: '',
      } as UserInputDTO;

      await SignUpMock(user);
    } catch (error) {
      expect(error.message).toBe('Password field is empty.');
    }
  });

  test('Should return invalid email error.', async () => {
    try {
      const user = {
        name: 'John Doe',
        nickname: 'johnDoe',
        email: 'john.doe@email.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await SignUpMock(user);
    } catch (error) {
      expect(error.message).toBe('Invalid email.');
    }
  });

  test('Should return duplicate email error.', async () => {
    try {
      const user = {
        name: 'John Doe',
        nickname: 'johnDoe',
        email: 'john.doe@email.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await SignUpMock(user);
    } catch (error) {
      expect(error.message).toContain('Email already registered.');
    }
  });

  test('Should return duplicate nickname error.', async () => {
    try {
      const user = {
        name: 'John Doe',
        nickname: 'johnDoe',
        email: 'john.doe@email.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await SignUpMock(user);
    } catch (error) {
      expect(error.message).toContain('Nickname already registered.');
    }
  });

  test('Should return too short password error.', async () => {
    try {
      const user = {
        name: 'John Doe',
        nickname: 'johnDoe',
        email: 'john.doe@email.com',
        password: 'qwe',
      } as UserInputDTO;

      await SignUpMock(user);
    } catch (error) {
      expect(error.message).toContain('Password is too short.');
    }
  });
  test('Should return too long password error.', async () => {
    try {
      const user = {
        name: 'John Doe',
        nickname: 'johnDoe',
        email: 'john.doe@email.com',
        password: 'qweqweqweqweqweqweqweqweqweqweqweqweqweqwqweqweeqweqwe',
      } as UserInputDTO;

      await SignUpMock(user);
    } catch (error) {
      expect(error.message).toContain('Password is too long.');
    }
  });

  test('Should return token string', async () => {
    const user = {
      name: 'John Doe',
      nickname: 'johnDoe',
      email: 'john.doe@email.com',
      password: 'qweqwe',
    } as UserInputDTO;

    const result = await SignUpMock(user);

    expect(await SignUpMock(user)).toMatch(result);
  });
});
