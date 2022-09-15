import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../utils/prisma';

interface CreateContextParams {
  req: NextApiRequest;
  res: NextApiResponse;
}

export function createContext({ req, res }: CreateContextParams) {
  return { req, res, prisma };
}

export type Context = ReturnType<typeof createContext>;
