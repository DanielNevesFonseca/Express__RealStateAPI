import { RealEstate, User } from "../entities";
import AppError from "../errors/AppError";
import { TCreateSchedule } from "../interfaces/schedule.interface";
import { realEstateRepo, scheduleRepo, userRepo } from "../repositories";

export const createScheduleService = async (
  data: TCreateSchedule,
  userId: number
): Promise<void> => {
  const dayOfWeek = new Date(data.date).getDay();
  if (dayOfWeek === 0 || dayOfWeek == 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const workingTime = Number(data.hour.split(":")[0]);
  if (workingTime < 8 || workingTime > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const realEstate: RealEstate | null = await realEstateRepo.findOneBy({
    id: Number(data.realEstateId),
  });

  const user: User | null = await userRepo.findOneBy({ id: userId });

  await scheduleRepo.save({ ...data, realEstate: realEstate!, user: user! });
};

export const readAllSchedulesOfARealEstateService = async (
  realEstateId: number
): Promise<RealEstate> => {
  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      schedules: {
        user: true,
      },
      address: true,
      category: true,
    },
  });

  if (!realEstate) throw new AppError("RealEstate not found", 404);

  return realEstate;
};
