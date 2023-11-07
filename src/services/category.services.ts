import { Category } from "../entities";
import AppError from "../errors/AppError";
import {
  TCategory,
  TCreateCategory,
  TReadAllCategories,
} from "../interfaces/category.interfaces";
import { categoryRepo } from "../repositories";

export const createCategoryService = async (
  data: TCreateCategory
): Promise<TCategory> => {
  return await categoryRepo.save(data);
};

export const readAllCategoriesService =
  async (): Promise<TReadAllCategories> => {
    return await categoryRepo.find();
  };

export const readRealEstatesByCategoryService = async (
  categoryId: number
): Promise<TCategory> => {
  const category: Category | null = await categoryRepo.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });

  if (!category) throw new AppError("Category not found", 404);

  return category;
};
