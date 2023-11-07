import { NextFunction, Request, Response } from "express";
import { RealEstate, Schedule } from "../entities";
import { realEstateRepo, scheduleRepo } from "../repositories";
import AppError from "../errors/AppError";

export const verifyRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId } = req.body;

  const foundRealEstate: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id: Number(realEstateId),
    },
  });

  if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

  return next();
};

export const verifyScheduleRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId, hour, date } = req.body;

  const foundSchedule: Schedule | null = await scheduleRepo.findOne({
    where: {
      realEstate: {
        id: Number(realEstateId),
      },
      hour,
      date,
    },
  });

  if (foundSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};

export const verifyUserScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let { sub } = res.locals.decoded;
  sub = Number(sub);
  const { hour, date } = req.body;

  const foundUserSchedule: Schedule | null = await scheduleRepo.findOne({
    where: {
      user: {
        id: sub,
      },
      date,
      hour,
    },
  });

  if (foundUserSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};
