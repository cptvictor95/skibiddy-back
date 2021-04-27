import connection from '../../connection';
import { userTable } from '../tableNames';

const queryUserByEmail = async (email: string) => {
  const result = await connection.select('*').from(userTable).where({ email });

  return result;
};

export default queryUserByEmail;
