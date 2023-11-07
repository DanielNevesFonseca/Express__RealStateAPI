import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  readAllUsersService,
  updateUserService,
} from "../services/user.services";
import { TUserReadReturn, TUserReturn } from "../interfaces/user.interfaces";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser: TUserReturn = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export const readAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const usersList: TUserReadReturn = await readAllUsersService();

  return res.status(200).json(usersList);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user } = res.locals;

  const updatedUser: TUserReturn = await updateUserService(req.body, user);

  return res.status(200).json(updatedUser);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user } = res.locals;

  await deleteUserService(user);

  return res.status(204).json();
};
