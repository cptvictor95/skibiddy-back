import signInBiz from '../src/business/signInBiz';
import { SignInInputDTO } from '../src/model/user';

/* 
  TO DO:
[X] Missing fields
[] Invalid email
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

      await signInBiz(user);
    } catch (error) {
      expect(error.message).toBe('Email field is empty.');
    }
  });
  it('Should return missing password error.', async () => {
    expect.assertions(1);
    try {
      const user = {
        email: 'cpt.victor@hotmail.com',
        password: '',
      } as SignInInputDTO;

      await signInBiz(user);
    } catch (error) {
      expect(error.message).toBe('Password field is empty.');
    }
  });
});
