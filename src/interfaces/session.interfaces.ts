import { z } from "zod";
import { loginSessionSchema } from "../schemas/session.schemas";

export type TLogin = z.infer<typeof loginSessionSchema>;

export type TLoginReturn = { token: string };
