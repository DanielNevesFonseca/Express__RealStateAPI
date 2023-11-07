import { Request, Response } from "express";
import { RealEstate } from "../entities";
import {
  createRealEstateService,
  readAllRealEstatesService,
} from "../services/realEstate.services";
import { TReadAllRealEstates } from "../interfaces/realEstate.interface";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newRealEstate: RealEstate = await createRealEstateService(req.body);

  return res.status(201).json(newRealEstate);
};

export const readAllRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateList: TReadAllRealEstates = await readAllRealEstatesService();

  return res.status(200).json(realEstateList);
};
