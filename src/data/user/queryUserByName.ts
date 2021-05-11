import connection from '../../connection';
import { User } from '../../model/user';
import { userTable } from '../tableNames';

const queryUserByName = async (name: string): Promise<User> => {
  const result: User[] = await connection
    .select('*')
    .from(userTable)
    .where('name', 'like', `%${name}%`);

  return result[0];
};

export default queryUserByName;
