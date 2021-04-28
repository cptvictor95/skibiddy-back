import connection from '../../connection';
import { User } from '../../model/user';
import { userTable } from '../tableNames';

const queryUserByEmail = async (email: string): Promise<User> => {
  const result: User[] = await connection
    .select('*')
    .from(userTable)
    .where({ email });

  return result[0];
};

export default queryUserByEmail;
