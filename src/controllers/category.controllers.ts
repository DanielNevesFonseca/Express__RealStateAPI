import { Request, Response } from "express";
import { Category } from "../entities";
import {
  createCategoryService,
  readAllCategoriesService,
  readRealEstatesByCategoryService,
} from "../services/category.services";
import {
  TCreateCategory,
  TReadAllCategories,
} from "../interfaces/category.interfaces";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory: TCreateCategory = await createCategoryService(req.body);

  return res.status(201).json(newCategory);
};

export const readAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allCategories: TReadAllCategories = await readAllCategoriesService();

  return res.status(200).json(allCategories);
};

export const readRealEstatesByCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { categoryId } = req.params;

  const realEstates = await readRealEstatesByCategoryService(
    Number(categoryId)
  );

  return res.status(200).json(realEstates);
};
