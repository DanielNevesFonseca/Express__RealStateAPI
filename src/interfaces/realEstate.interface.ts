import { z } from "zod";
import { createRealStateSchema } from "../schemas/realEstate.schemas";
import { Repository } from "typeorm";
import { Address, RealEstate } from "../entities";

export type TCreateRealEstate = z.infer<typeof createRealStateSchema>;

export type TReadAllRealEstates = Array<RealEstate>;

export type TRealEstateRepo = Repository<RealEstate>;

export type TAddressRepo = Repository<Address>;
