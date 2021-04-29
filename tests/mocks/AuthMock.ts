import { authData } from '../../src/model/authData';
import { UserInputDTO } from '../../src/model/user';
import { generateToken } from '../../src/services/auth';
import createId from '../../src/services/idGen';
import signUpBiz from '../../src/business/signUpBiz';
import { inputValidator } from '../../src/utils/inputValidator';
import { registeredValidator } from '../../src/utils/registeredValidator';
import { emailValidator } from '../../src/utils/emailValidator';
import { passwordValidator } from '../../src/utils/passwordValidator';

const authMock = (input: UserInputDTO) => {
  const id = createId();
  const user = {
    id: id,
    name: input.name,
    nickname: input.nickname,
    email: input.email,
    password: input.password,
  };
  const token = signUpBiz(
    user,
    inputValidator,
    registeredValidator,
    emailValidator,
    passwordValidator
  );

  return token;
};

export default authMock;
