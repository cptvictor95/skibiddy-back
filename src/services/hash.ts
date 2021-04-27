import * as bcrypt from 'bcryptjs';

export const hash = async (str: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const result = await bcrypt.hash(str, salt);

  return result;
};

export const compare = async (str: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(str, hash);
};
