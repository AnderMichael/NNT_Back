import UserRepository from "../repositories/userRepository";
import { IUser } from "../models/user";

const getAllUsers = async (): Promise<IUser[]> => {
  return UserRepository.findAll();
};

const getUserById = async (id: string): Promise<IUser | null> => {
  return UserRepository.findById(id);
};

const createUser = async (user: IUser): Promise<IUser> => {
  return UserRepository.create(user);
};

const updateUser = (id: string, user: Partial<IUser>): Promise<IUser | null> => {
    return UserRepository.update(id, user);
  };

const getRanking =  async (): Promise<IUser[]>=> {
    try {
      return await UserRepository.findRankedByPoints();
    } catch (error) {
      throw new Error(`Error al obtener el ranking de usuarios: ${error}`);
    }
  }
export default { getAllUsers, getUserById, createUser, updateUser, getRanking };
