import { Request, Response } from 'express';
import { createGenreBiz } from '../../business/genre/createGenreBiz';
import { insertGenre } from '../../data/genre/insertGenre';
import { Genre } from '../../model/genre';

export const createGenre = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const genre: Genre = req.body;
    const token = req.headers.authorization as string;

    await createGenreBiz(token, genre, insertGenre);

    return res.status(201).send({
      status: 'Success!',
      message: 'Genre created!',
      genre: genre,
    });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};
