import { Router } from "express";
import { loginController } from "../controllers/session.controllers";

export const sessionRouter: Router = Router();

sessionRouter.post("/", loginController);
