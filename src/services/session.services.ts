import "dotenv/config";
import { compare } from "bcryptjs";
import { User } from "../entities";
import AppError from "../errors/AppError";
import { TLogin, TLoginReturn } from "../interfaces/session.interfaces";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";

export const loginService = async (data: TLogin): Promise<TLoginReturn> => {
  const { email } = data;

  const foundUser: User | null = await userRepo.findOneBy({ email });
  if (!foundUser) throw new AppError("Invalid credentials", 401);

  const comparePassword = await compare(data.password, foundUser.password);
  if (!comparePassword) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { email: foundUser.email, admin: foundUser.admin },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};
