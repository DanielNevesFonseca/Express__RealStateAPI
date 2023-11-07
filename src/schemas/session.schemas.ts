import { z } from "zod";

export const loginSessionSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
