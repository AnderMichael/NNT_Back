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

export default { getAllUsers, getUserById, createUser };
