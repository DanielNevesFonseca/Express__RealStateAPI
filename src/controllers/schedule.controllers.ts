import { Request, Response } from "express";
import {
  createScheduleService,
  readAllSchedulesOfARealEstateService,
} from "../services/schedule.services";

export const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sub } = res.locals.decoded;

  await createScheduleService(req.body, sub);

  return res.status(201).json({ message: "Schedule created" });
};

export const readAllSchedulesOfARealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { realEstateId } = req.params;

  const realEstate = await readAllSchedulesOfARealEstateService(
    Number(realEstateId)
  );

  return res.status(200).json(realEstate);
};
