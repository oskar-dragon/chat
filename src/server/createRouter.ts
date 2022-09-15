import { router } from '@trpc/server';
import superjson from 'superjson';
import type { Context } from './createContext';

function createRouter() {
  return router<Context>().transformer(superjson);
}

export default createRouter;
