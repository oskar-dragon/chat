import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../server/routers/app';

const trpc = createReactQueryHooks<AppRouter>();

export default trpc;
