import { z } from "zod";
import { createScheduleSchema } from "../schemas/schedule.schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

export type TCreateSchedule = z.infer<typeof createScheduleSchema>;

export type TScheduleRepo = Repository<Schedule>;
