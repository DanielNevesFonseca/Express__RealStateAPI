import { z } from "zod";
import {
  categorySchema,
  readAllCategoriesSchema,
} from "../schemas/category.schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

export type TCategory = z.infer<typeof categorySchema>;

export type TCreateCategory = Omit<TCategory, "id">;

export type TCategoryRepo = Repository<Category>;

export type TReadAllCategories = z.infer<typeof readAllCategoriesSchema>;
