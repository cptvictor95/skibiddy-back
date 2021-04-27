import * as jwt from 'jsonwebtoken';
import { authData } from '../model/authData';
import { Payload } from '../model/payload';

export const generateToken = (input: authData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn: '60min',
    }
  );

  return token;
};

export const getTokenData = (token: string): authData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as Payload;

  const result = {
    id: payload.id,
  };

  return result;
};
