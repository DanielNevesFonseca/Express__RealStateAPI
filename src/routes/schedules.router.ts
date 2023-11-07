import { Router } from "express";
import {
  validateBodyZod,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middlewares";
import {
  verifyRealEstateExists,
  verifyScheduleRealEstateExists,
  verifyUserScheduleExists,
} from "../middlewares/schedule.middlewares";
import {
  createScheduleController,
  readAllSchedulesOfARealEstateController,
} from "../controllers/schedule.controllers";
import { createScheduleSchema } from "../schemas/schedule.schemas";

export const schedulesRouter: Router = Router();

schedulesRouter.post(
  "/",
  verifyToken,
  validateBodyZod(createScheduleSchema),
  verifyRealEstateExists,
  verifyScheduleRealEstateExists,
  verifyUserScheduleExists,
  createScheduleController
);

schedulesRouter.get(
  "/realEstate/:realEstateId",
  verifyToken,
  verifyAdmin,
  readAllSchedulesOfARealEstateController
);
