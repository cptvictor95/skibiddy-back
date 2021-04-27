import connection from '../../connection';
import { User } from '../../model/user';
import { userTable } from '../tableNames';

const insertUser = async (user: User) => {
  const result = await connection.insert(user).into(userTable);

  return result;
};

export default insertUser;
