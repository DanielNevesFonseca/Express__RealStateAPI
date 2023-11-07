import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

export const createUserSchema = userSchema.pick({
  name: true,
  email: true,
  admin: true,
  password: true,
});

export const userWithoutAdmin = createUserSchema.omit({ admin: true });

export const updateUserSchema = userWithoutAdmin.partial();

export const userReturnSchema = userSchema.omit({ password: true });

export const userReturnArraySchema = userReturnSchema.array();

export const userReadSchema = userSchema.array();
