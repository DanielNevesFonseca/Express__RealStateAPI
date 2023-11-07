import { Router } from "express";
import { createUserSchema, updateUserSchema } from "../schemas/user.schemas";
import {
  createUserController,
  deleteUserController,
  readAllUsersController,
  updateUserController,
} from "../controllers/user.controllers";
import {
  validateBodyZod,
  verifyAdmin,
  verifyPermissions,
  verifyToken,
} from "../middlewares/globals.middlewares";
import {
  verifyUniqueUserEmail,
  verifyUserExists,
} from "../middlewares/user.middlewares";

export const usersRouter: Router = Router();

usersRouter.post(
  "/",
  validateBodyZod(createUserSchema),
  verifyUniqueUserEmail,
  createUserController
);

usersRouter.get("/", verifyToken, verifyAdmin, readAllUsersController);

usersRouter.patch(
  "/:userId",
  validateBodyZod(updateUserSchema),
  verifyToken,
  verifyUserExists,
  verifyPermissions,
  updateUserController
);

usersRouter.delete(
  "/:userId",
  verifyToken,
  verifyUserExists,
  verifyPermissions,
  deleteUserController
);
