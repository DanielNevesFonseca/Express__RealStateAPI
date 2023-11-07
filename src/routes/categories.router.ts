import { Router } from "express";
import {
  validateBodyZod,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middlewares";
import {
  verifyCategoryExists,
  verifyUniqueCategoryName,
} from "../middlewares/category.midlewares";
import {
  createCategoryController,
  readAllCategoriesController,
  readRealEstatesByCategoryController,
} from "../controllers/category.controllers";
import { createCategorySchema } from "../schemas/category.schemas";

export const categoriesRouter: Router = Router();

categoriesRouter.post(
  "/",
  validateBodyZod(createCategorySchema),
  verifyToken,
  verifyUniqueCategoryName,
  verifyAdmin,
  createCategoryController
);

categoriesRouter.get("/", readAllCategoriesController);

categoriesRouter.get(
  "/:categoryId/realEstate",
  verifyCategoryExists,
  readRealEstatesByCategoryController
);
