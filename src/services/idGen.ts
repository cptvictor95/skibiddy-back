import { v4 } from 'uuid';

const createId = (): string => {
  const id = v4();

  return id;
};
export default createId;
