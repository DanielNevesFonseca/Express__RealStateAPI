import { z } from "zod";
import { User } from "../entities/User.entity";
import {
  createUserSchema,
  userReturnSchema,
} from "../schemas/user.schemas";
import { DeepPartial, Repository } from "typeorm";

export type TCreateUser = z.infer<typeof createUserSchema>;

export type TUpdateBodyUser = Omit<TCreateUser, "admin">;

export type TUpdateUser = DeepPartial<TUpdateBodyUser>;

export type TUserReturn = z.infer<typeof userReturnSchema>;

export type TUserReadReturn = Array<TUserReturn>;

export type TUserRepo = Repository<User>;
