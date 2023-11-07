import { User } from "../entities/User.entity";
import {
  TCreateUser,
  TUpdateUser,
  TUserReadReturn,
  TUserReturn,
} from "../interfaces/user.interfaces";
import { userRepo } from "../repositories";
import {
  userReturnArraySchema,
  userReturnSchema,
} from "../schemas/user.schemas";

export const createUserService = async (
  data: TCreateUser
): Promise<TUserReturn> => {
  // cria um objeto com apenas o que vem da requisição
  const createdUser = userRepo.create(data);
  
  // salva o objeto com tudo que é gerado automaticamente na tabela + o req.body
  await userRepo.save(createdUser);
  
  // RETORNA O OBJTO SEM A PASSWORD NO res.json
  return userReturnSchema.parse(createdUser);
};

export const readAllUsersService = async (): Promise<TUserReadReturn> => {
  const usersList: User[] = await userRepo.find();

  return userReturnArraySchema.parse(usersList);
};

export const updateUserService = async (
  data: TUpdateUser,
  user: User
): Promise<TUserReturn> => {
  const userUpdated: User = userRepo.create({ ...user, ...data });

  return userReturnSchema.parse(userUpdated);
};

export const deleteUserService = async (user: User): Promise<void> => {
  await userRepo.softRemove(user);
};
