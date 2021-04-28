import connection from '../../connection';
import { User } from '../../model/user';
import { userTable } from '../tableNames';

const queryUserById = async (id: string): Promise<User> => {
  const result: User[] = await connection
    .select('*')
    .from(userTable)
    .where({ id });

  return result[0];
};

export default queryUserById;
