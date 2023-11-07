import { Router } from "express";
import {
  validateBodyZod,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middlewares";
import { verifyAddressExists } from "../middlewares/realEstate.middlewares";
import { createRealStateSchema } from "../schemas/realEstate.schemas";
import {
  createRealEstateController,
  readAllRealEstatesController,
} from "../controllers/realEstate.controllers";

export const realEstatesRouter: Router = Router();

realEstatesRouter.post(
  "/",
  verifyToken,
  verifyAdmin,
  validateBodyZod(createRealStateSchema),
  verifyAddressExists,
  createRealEstateController
);

realEstatesRouter.get("/", readAllRealEstatesController);
