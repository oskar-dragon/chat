import z from 'zod';

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const createUserSchemaOutput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
