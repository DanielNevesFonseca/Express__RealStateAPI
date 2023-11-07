import { string, z } from "zod";

export const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().default(0).or(string()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().positive(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
  categoryId: z.number().positive().int(),
});

export const createRealStateSchema = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});
