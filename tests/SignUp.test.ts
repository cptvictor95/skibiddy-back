import signUpBiz from '../src/business/signUpBiz';
import { UserInputDTO } from '../src/model/user';
import { inputValidator } from '../src/utils/inputValidator';
import { registeredValidator } from '../src/utils/registeredValidator';
import { emailValidator } from '../src/utils/emailValidator';
import { passwordValidator } from '../src/utils/passwordValidator';
import authMock from './mocks/AuthMock';

/* 
  -- TO DO:
[X] Missing fields
[X] Invalid email
[X] Email already registered
[X] Nickname already registered
[X] Password too short
[X] Authenticator Mock created
[] Authenticator Mock tested
[] SignUp Success
*/

// SignUp Suite
describe('SignUp Test Suite', () => {
  test('Should return missing field error.', async () => {
    try {
      const user = {
        name: '',
        nickname: 'fleabs',
        email: 'fleabs@hotmail.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await signUpBiz(
        user,
        inputValidator,
        registeredValidator,
        emailValidator,
        passwordValidator
      );
    } catch (error) {
      expect(error.message).toBe('Name field is empty.');
    }
  });

  test('Should return missing field error.', async () => {
    try {
      const user = {
        name: 'Victor Cardoso Pudo Torres',
        nickname: '',
        email: 'fleabs@hotmail.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await signUpBiz(
        user,
        inputValidator,
        registeredValidator,
        emailValidator,
        passwordValidator
      );
    } catch (error) {
      expect(error.message).toBe('Nickname field is empty.');
    }
  });

  test('Should return missing field error.', async () => {
    try {
      const user = {
        name: 'Victor Cardoso Pudo Torres',
        nickname: 'fleabs',
        email: '',
        password: 'qweqwe',
      } as UserInputDTO;

      await signUpBiz(
        user,
        inputValidator,
        registeredValidator,
        emailValidator,
        passwordValidator
      );
    } catch (error) {
      expect(error.message).toBe('Email field is empty.');
    }
  });

  test('Should return missing field error.', async () => {
    try {
      const user = {
        name: 'Victor Cardoso Pudo Torres',
        nickname: 'fleabs',
        email: 'fleabs@hotmail.com',
        password: '',
      } as UserInputDTO;

      await signUpBiz(
        user,
        inputValidator,
        registeredValidator,
        emailValidator,
        passwordValidator
      );
    } catch (error) {
      expect(error.message).toBe('Password field is empty.');
    }
  });

  test('Should return invalid email error.', async () => {
    try {
      const user = {
        name: 'Victor',
        nickname: 'fleabs',
        email: 'fleabshotmail.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await signUpBiz(
        user,
        inputValidator,
        registeredValidator,
        emailValidator,
        passwordValidator
      );
    } catch (error) {
      expect(error.message).toBe('Invalid email.');
    }
  });

  test('Should return duplicate email error.', async () => {
    try {
      const user = {
        name: 'Victor',
        nickname: 'fleabssss',
        email: 'cpt.victor@hotmail.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await signUpBiz(
        user,
        inputValidator,
        registeredValidator,
        emailValidator,
        passwordValidator
      );
    } catch (error) {
      expect(error.message).toContain('Email already registered.');
    }
  });

  test('Should return duplicate nickname error.', async () => {
    try {
      const user = {
        name: 'Victor',
        nickname: 'flebas',
        email: 'cpt.victoreqweaa@hotmail.com',
        password: 'qweqwe',
      } as UserInputDTO;

      await signUpBiz(
        user,
        inputValidator,
        registeredValidator,
        emailValidator,
        passwordValidator
      );
    } catch (error) {
      expect(error.message).toContain('Nickname already registered.');
    }
  });

  test('Should return too short password error.', async () => {
    try {
      const user = {
        name: 'Victor',
        nickname: 'fleabs',
        email: 'cpt.victor@hotmail.com',
        password: 'qwe',
      } as UserInputDTO;

      await signUpBiz(
        user,
        inputValidator,
        registeredValidator,
        emailValidator,
        passwordValidator
      );
    } catch (error) {
      expect(error.message).toContain('Password is too short.');
    }
  });
  test('Should return too long password error.', async () => {
    try {
      const user = {
        name: 'Victor',
        nickname: 'fleabs',
        email: 'cpt.victor@hotmail.com',
        password: 'qweqweqweqweqweqweqweqweqweqweqweqweqweqwqweqweeqweqwe',
      } as UserInputDTO;

      await signUpBiz(
        user,
        inputValidator,
        registeredValidator,
        emailValidator,
        passwordValidator
      );
    } catch (error) {
      expect(error.message).toContain('Password is too long.');
    }
  });

  // test('Should return token string', async () => {
  //   const user = {
  //     name: 'John Doe',
  //     nickname: 'johnDoe',
  //     email: 'john.doe@email.com',
  //     password: 'qweqwe',
  //   } as UserInputDTO;

  //   const result = await authMock(user);

  //   expect(await authMock(user)).toMatch(result);
  // });
});
