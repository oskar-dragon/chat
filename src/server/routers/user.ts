import * as trpc from '@trpc/server';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { createUserSchema } from '../../schema/user';
import createRouter from '../createRouter';

const userRouter = createRouter()
  .mutation('register-user', {
    input: createUserSchema,
    async resolve({ ctx, input }) {
      const { email, name } = input;

      try {
        const user = await ctx.prisma.user.create({
          data: {
            email,
            name,
          },
        });

        return user;
      } catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
          if (err.code === 'P2002') {
            throw new trpc.TRPCError({ code: 'CONFLICT', message: 'User already exists' });
          }
        }

        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong',
        });
      }
    },
  })
  .query('login-user', {});

export default userRouter;
