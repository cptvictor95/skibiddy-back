import connection from '../../connection';
import { User } from '../../model/user';

const queryUsers = async (): Promise<User[]> => {
  const result: User[] = await connection.select('*').from('Users');

  return result;
};

export default queryUsers;
