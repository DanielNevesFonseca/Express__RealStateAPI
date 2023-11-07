import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { TScheduleRepo } from "./interfaces/schedule.interface";
import {
  TAddressRepo,
  TRealEstateRepo,
} from "./interfaces/realEstate.interface";
import { TCategoryRepo } from "./interfaces/category.interfaces";
import { TUserRepo } from "./interfaces/user.interfaces";

// CENTRALIZA TODAS AS TABELAS DO BANCO DE DADOS, CRIADOS PELAS ENTIDADES

export const userRepo: TUserRepo = AppDataSource.getRepository(User);

export const scheduleRepo: TScheduleRepo =
  AppDataSource.getRepository(Schedule);

export const realEstateRepo: TRealEstateRepo =
  AppDataSource.getRepository(RealEstate);

export const categoryRepo: TCategoryRepo =
  AppDataSource.getRepository(Category);

export const addressRepo: TAddressRepo = AppDataSource.getRepository(Address);
