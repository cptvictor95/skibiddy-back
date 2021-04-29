import connection from '../../connection';
import { User } from '../../model/user';
import { userTable } from '../tableNames';

const insertUser = async (user: User) => {
  await connection.insert(user).into(userTable);
};

export default insertUser;
